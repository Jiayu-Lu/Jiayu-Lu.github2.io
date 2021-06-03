let myImage = document.querySelector('img');
myImage.onclick = function() {
    alert('别戳我，我怕疼。');
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpg') {
      myImage.setAttribute('src', 'images/image2.jpg');
    } else {
      myImage.setAttribute('src', 'images/image1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎你，' + myName;
}

myButton.onclick = function() {
   setUserName();
}


