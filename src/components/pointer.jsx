import Point from '../assets/mouse.svg'

function MousePoint() {
const cursorRounded = document.querySelector('.rounded');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)
}

export default MousePoint