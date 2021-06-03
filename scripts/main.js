let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('body').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpg') {
      myImage.setAttribute('src', 'images/image2.jpg');
    } else {
      myImage.setAttribute('src', 'images/image1.jpg');
    }
}
