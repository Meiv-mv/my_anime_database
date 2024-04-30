const listEl = document.getElementById("list")
const submitBtn = document.getElementById("submit-btn")
const imgFile = document.getElementById("image-upload")
const titleEl = document.getElementById("title")
const typeEl = document.getElementById("type-select")
const ratingEl = document.getElementById("rating")
const commentEl = document.getElementById("comment")
const ratingValue = document.getElementById("rating-value")
const resetBtn = document.getElementById("reset-btn")
let index = []

class Item{
  constructor(img, title, type, status, rating, comment){
    this.img = img
    this.title = title
    this.type = type
    this.status = status
    this.rating = rating
    this.comment = comment
  }
}

ratingEl.addEventListener("input", function(){
  ratingValue.innerHTML = ratingEl.value
})

submitBtn.addEventListener("click", function(e){
  e.preventDefault()
  let statusEl = document.querySelector("input[type='radio']:checked")

  let item = new Item(imgFile.files[0], titleEl.value, typeEl.value, statusEl.value, ratingEl.value, commentEl.value)
  index.push(item)
  renderItem(index)
  reset()
})

resetBtn.addEventListener("click", function(e){
  e.preventDefault()
  reset()
})

function renderItem(arr){
  let itemList = ""
  for (let i = 0; i < arr.length; i++){
    itemList +=`
    <li class="item">
      <img src="${URL.createObjectURL(arr[i].img)}" alt="item pic">
      <div class="item-info">
        <p>Title:
          <p class="internal-paragraph">${arr[i].title}</p>
        </p>
        <p>Type:
          <p class="internal-paragraph">${arr[i].type}</p>
        </p>
        <p>Status:
          <p class="internal-paragraph ${arr[i].status}">${arr[i].status}</p>
        </p>
        <p>Rating:
          <p class="internal-paragraph">${arr[i].rating}</p>
        </p>
      </div>
      <divc class="comment">Comment:
        <p class="internal-paragraph">${arr[i].comment}</p>
      </div>
    </li>`
  }
  listEl.innerHTML = itemList
}

function reset(){
  imgFile.value = ""
  titleEl.value = ""
  typeEl.value = 0
  let statusEl = document.querySelectorAll("input[type='radio']")
  for (let i = 0; i < statusEl.length; i++){
    statusEl[i].checked = false
  }
  ratingEl.value = 50
  ratingValue.innerHTML = 50
  commentEl.value = ""
}