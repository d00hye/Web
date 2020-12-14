let basketList = [];

const basketTag = document.querySelector(".basket");
const basketUl = document.createElement("ul");

function deleteList(e) {
  const btn = e.target;
  const li = btn.parentNode;
  console.log(li);
  basketUl.removeChild(li);
  const idValue = li.getAttribute("id");
  localStorage.removeItem(idValue);
}

function init() {

  for (let i = 0; i < localStorage.length; i++) {
    basketList.push(localStorage.getItem(localStorage.key(i)));
  }
  basketTag.appendChild(basketUl);

  basketList.map((basketValue, index) => {
    const basketLi = document.createElement("li");
 
    basketLi.setAttribute("id", localStorage.key(index));
  
    const basketImg = document.createElement("img");
    basketImg.setAttribute("src", basketValue);

    const basketP = document.createElement("p");
    const basketPText = document.createTextNode(localStorage.key(index));
    basketP.appendChild(basketPText);

    const basketDel = document.createElement("button");
    const basketDelText = document.createTextNode("X");

    basketDel.addEventListener("click", deleteList);

    basketDel.appendChild(basketDelText);
    basketLi.appendChild(basketImg);
    basketLi.appendChild(basketP);
    basketLi.appendChild(basketDel);
    basketUl.appendChild(basketLi);
  });
}

init();
