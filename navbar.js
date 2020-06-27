const slide = () => {
  const burger=document.querySelector('.burger');
  const navbaritems=document.querySelector('.Navbaritems');
  burger.addEventListener('click',()=>{
    navbaritems.classList.toggle('burger-active');
    burger.classList.toggle('close');
  });
}
slide();
