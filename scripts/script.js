let menuIcon = document.querySelector('.menuIcon')
let menuList = document.querySelector('.menuList')

menuIcon.addEventListener('click', () => {
   
  if(menuList.style.display === ""){
    menuList.style.display = 'block';
  }
  else{
    menuList.style.display = '';
  }
})