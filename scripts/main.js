let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/2024-09-10 232133.png") {
    myImage.setAttribute("src", "images/20240911132358.jpg");
  } else {
    myImage.setAttribute("src", "images/2024-09-10 232133.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome to Fear And Dreams! " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome to Fear And Dreams! " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Welcome to Fear And Dreams! " + myName;
    }
  }
  