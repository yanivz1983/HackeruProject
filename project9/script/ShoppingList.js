const toggleMenu = () => {
  document.querySelector(".toggleMenu").addEventListener("click", () => {
    document.querySelector(".addList").classList.toggle("hide");
  });
};

const createList = () => {
  let container = document.querySelector(".listsContainer");
  let newDiv = document.createElement("div");
  let newH2 = document.createElement("h2");
  let newBtn = document.createElement("button");
  let newListInput = document.createElement("input");

  if (document.querySelector("#listInput").value) {
    let allLists = document.querySelectorAll(".toggleList");

    if (allLists) {
      for (let item of allLists) {
        if (item.innerHTML == document.querySelector("#listInput").value) {
          alert("List already exist!");
          return;
        }
      }
    }

    newBtn.classList = "btn btn-outline-dark wide m-2 toggleList";
    newBtn.innerHTML = document.querySelector("#listInput").value;

    let hideDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.appendChild(newBtn);
    newDiv.appendChild(hideDiv);

    hideDiv.appendChild(newListInput);
    newListInput.classList = "form-control m-2";
    let listBtn = document.createElement("button");
    listBtn.classList = "btn m-2 btn btn-outline-secondary";
    listBtn.innerHTML = "Add Item";
    hideDiv.appendChild(listBtn);

    newBtn.addEventListener("click", () => {
      hideDiv.classList.toggle("hide");
    });

    let newUl = document.createElement("ul");

    listBtn.addEventListener("click", () => {
      if (newListInput.value) {
        let hr = document.createElement("hr");
        let liDiv = document.createElement("div");
        let newLi = document.createElement("li");
        let txt = document.createTextNode(newListInput.value);
        let icon = document.createElement("i");

        icon.classList = "fa-regular fa-circle-xmark";
        newLi.appendChild(hr);
        newLi.appendChild(icon);
        newLi.appendChild(txt);
        hideDiv.appendChild(newUl).appendChild(newLi);

        icon.addEventListener("click", () => {
          newLi.remove();
        });
      } else {
        alert("Wrong Input");
      }
    });
  } else {
    alert("Wrong Input");
  }

  document.querySelector(".remove").addEventListener("click", () => {
    let allLists = document.querySelectorAll(".toggleList");
    let input = document.querySelector("#listInput").value;

    for (let item of allLists) {
      if (item.innerHTML == input) {
        item.parentElement.remove();
        console.log(item);
      }
    }
  });
};

window.addEventListener("load", () => {
  toggleMenu();

  document.getElementById("addBtn").addEventListener("click", (e) => {
    e.preventDefault();
    createList();
  });
});
