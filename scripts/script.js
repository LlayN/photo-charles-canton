const menuIcon = document.querySelector('.menuIcon')
const menuList = document.querySelector('.menuList')
const middle = document.querySelector('.middle')

menuIcon.addEventListener('click', () => {
    
  if(menuList.style.display === ""){
    menuList.style.display = 'block';
    
  }
  else{
    menuList.style.display = '';
  }

  if(!menuList.classList.contains('btn_active')){
    menuList.classList.add('btn_active')
    middle.classList.add('btn_active')
  }
  else{
    menuList.classList.remove('btn_active')
    middle.classList.remove('btn_active')
  }
})
