const listEl = document.getElementById("list")
const submitBtn = document.getElementById("submit-btn")
const imgFile = document.getElementById("image-upload")
const titleEl = document.getElementById("title")
const typeEl = document.getElementById("type-select")
const ratingEl = document.getElementById("rating")
const commentEl = document.getElementById("comment")
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

submitBtn.addEventListener("click", function(e){
  e.preventDefault()
  let statusEl = document.querySelector("input[type='radio']:checked")

  let item = new Item(imgFile.files[0], titleEl.value, typeEl.value, statusEl.value, ratingEl.value, commentEl.value)
  index.push(item)
  renderItem(index)
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

// listEl.innerHTML += `
//         <li class="item">
//           <img src="${index[i].imgFile.value}" alt="item pic">
//           <div class="item-info">
//             <p>Title:
//               <p class="internal-paragraph">${index[i].titleEl.value}</p>
//             </p>
//             <p>Type:
//               <p class="internal-paragraph">${index[i].typeEl.value}</p>
//             </p>
//             <p>Status:
//               <p class="internal-paragraph completed">${index[i].statusEl.value}</p>
//             </p>
//             <p>Rating:
//               <p class="internal-paragraph">${index[i].ratingEl.value}</p>
//             </p>
//           </div>
//           <div>Comment:
//             <p class="internal-paragraph">${index[i].commentEl.value}</p>
//           </div>
//         </li>`