var cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e)=>{
    (e.x >= window.innerWidth-20) ? cursor.classList.add('center') : cursor.style.left = `${e.x}px`;
    (e.y >= window.innerHeight-20) ? cursor.classList.add('center') : cursor.style.top = `${e.y}px`;
});