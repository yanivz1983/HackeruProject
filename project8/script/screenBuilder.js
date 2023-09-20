let elmsArr = [];

const createElm = (
  tagName,
  content,
  color,
  width,
  height,
  size,
  backgroundColor,
  border,
  margin,
  padding,
  borderRadius,
  boxShadow,
  id
) => {
  let pageDiv = document.getElementById("pageDiv");
  let newElm = document.createElement(tagName); // create new elm
  pageDiv.appendChild(newElm); // add new elm to html
  newElm.innerText = content; // set content to elm
  newElm.style.color = color; // set color
  newElm.style.width = width + "vw"; // set width and add px
  newElm.style.height = height + "vh"; // set height and add px
  newElm.style.fontSize = size + "rem"; // set font size and add rem
  newElm.style.backgroundColor = backgroundColor;
  newElm.style.border = border;
  newElm.style.margin = margin + "px";
  newElm.style.padding = padding + "px";
  newElm.style.borderRadius = borderRadius + "%";
  newElm.style.boxShadow = boxShadow;
  newElm.id = id;
  // elmsArr.push({
  //   tagName: tagName,
  //   content: content,
  //   color: color,
  //   width: width,
  //   height: height,
  //   size: size,
  // border: border,
  // }); // save in array the new tag
  elmsArr.push({
    tagName,
    content,
    color,
    width,
    height,
    size,
    backgroundColor,
    border,
    margin,
    padding,
    borderRadius,
    boxShadow,
    id,
  }); // save in array the new tag
  const creationInfo = document.getElementById("creationInfo");
  creationInfo.innerText = `Created ${tagName} element with content: "${content}"`;
  console.log("elmsArr", elmsArr);
};

const clearPage = () => {
  let pageDiv = document.querySelector("#pageDiv");
  pageDiv.innerHTML = ""; // remove all tags
};

const restorePage = () => {
  elmsArr = []; // clear the array
  let newElmsArr = []; // clear the array
  let jsonStr = localStorage.getItem("tags"); // get string json from localStorage
  console.log("jsonStr", jsonStr);
  newElmsArr = JSON.parse(jsonStr); //convert from json to array
  console.log("newElmsArr", newElmsArr);
  for (let item of newElmsArr);
  {
    createElm(
      item.tagName,
      item.content,
      item.color,
      item.width,
      item.height,
      item.size,
      item.backgroundColor,
      item.border,
      item.margin,
      item.padding,
      item.borderRadius,
      item.boxShadow,
      item.id
    );
  }
};

window.addEventListener("load", () => {
  document.getElementById("form1").addEventListener("submit", (e) => {
    //happends when we put btn in form
    e.preventDefault(); //stop refresh
  });
  document.getElementById("submitBtn").addEventListener("click", () => {
    let inputTag = document.getElementById("inputTag"); // get elm from html
    let inputContent = document.getElementById("inputContent"); // get elm from html
    let inputColor = document.getElementById("inputColor"); // get elm from html
    let inputWidth = document.getElementById("inputWidth"); // get elm from html
    let inputHeight = document.getElementById("inputHeight"); // get elm from html
    let inputSize = document.getElementById("inputSize"); // get elm from html
    let inputBackground = document.getElementById("inputBackground"); // get elm from html
    let inputBorder = document.getElementById("inputBorder"); // get elm from html
    let inputMargin = document.getElementById("inputMargin");
    let inputPadding = document.getElementById("inputPadding");
    let inputBorderRadius = document.getElementById("inputBorderRadius");
    let inputBoxShadow = document.getElementById("inputBoxShadow");
    let inputId = document.getElementById("inputId");
    createElm(
      inputTag.value,
      inputContent.value,
      inputColor.value,
      inputWidth.value,
      inputHeight.value,
      inputSize.value,
      inputBackground.value,
      inputBorder.value,
      inputMargin.value,
      inputPadding.value,
      inputBorderRadius.value,
      inputBoxShadow.value,
      inputId.value
    ); //execute the function and passing values from inputs
    //createElm("h1", "test")
  });
  document.getElementById("saveBtn").addEventListener("click", () => {
    let jsonStr = JSON.stringify(elmsArr); // convert array to string (json)
    //why we need to convert? to save it in localStorage
    //localStorage can save only strings
    localStorage.setItem("tags", jsonStr); //save to localStorage
  });
  document.getElementById("clearBtn").addEventListener("click", () => {
    clearPage();
  });
  restorePage();
});
