const shareButton = document.getElementsByClassName('share');
const shareMenu = document.getElementsByClassName('share-menu')
console.log(shareButton);

shareButton[0].addEventListener('click', function() {
    shareMenu[0].classList.toggle('menu-active');
    shareButton[0].classList.toggle('share-active')   
});
