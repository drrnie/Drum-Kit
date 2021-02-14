let btn = document.querySelectorAll('.drum');
let audio;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function (){
    let btnInnerHtml = this.innerHTML;
    keyClick(btnInnerHtml);
    btnAnimate(btnInnerHtml);
  } );
}

document.addEventListener('keydown', (event) => {
  keyPressed(event.key);
  btnAnimate(event.key);
});

let keyPressed = (key) => 
{
  const pressedCrash = new Audio('sounds/crash.mp3');
  const pressedKickBass = new Audio('sounds/kick-bass.mp3');
  const pressedSnare = new Audio('sounds/snare.mp3');
  const pressedTom1 = new Audio('sounds/tom-1.mp3');
  const pressedTom2 = new Audio('sounds/tom-2.mp3');
  const pressedTom3 = new Audio('sounds/tom-3.mp3');
  const pressedTom4 = new Audio('sounds/tom-4.mp3');
  key === 'w' ? pressedCrash.play() 
  : (key === 'a' ? pressedKickBass.play()
  : (key === 's' ? pressedSnare.play()
  : (key === 'd' ? pressedTom1.play()
  : (key === 'j' ? pressedTom2.play()
  : (key === 'k' ? pressedTom3.play()
  : (key === 'l' ? pressedTom4.play()
  : null))))))  
}

let keyClick = (btnInnerHtml) => 
{
  const clickCrash = new Audio('sounds/crash.mp3');
  const clickBass = new Audio('sounds/kick-bass.mp3');
  const clickSnare = new Audio('sounds/snare.mp3');
  const clickTom1 = new Audio('sounds/tom-1.mp3');
  const clickTom2 = new Audio('sounds/tom-2.mp3');
  const clickTom3 = new Audio('sounds/tom-3.mp3');
  const clickTom4 = new Audio('sounds/tom-4.mp3');
  btnInnerHtml === 'w' ? clickCrash.play() 
  : (btnInnerHtml === 'a' ? clickBass.play()
  : (btnInnerHtml === 's' ? clickSnare.play()
  : (btnInnerHtml === 'd' ? clickTom1.play()
  : (btnInnerHtml === 'j' ? clickTom2.play()
  : (btnInnerHtml === 'k' ? clickTom3.play()
  : (btnInnerHtml === 'l' ? clickTom4.play()
  : null))))))  
}

let btnAnimate = (currentKey) => {
  let btnActive = document.querySelector('.' + currentKey);
  btnActive.classList.add('active');
  setTimeout(() => {
    btnActive.classList.remove('active');
  }, 100);
}
