const btnmob = document.getElementById('btnmobile');

function togglemenu(){
    const menu = document.getElementById('men');
    menu.classList.toggle('active');
}


btnmob.addEventListener('click', togglemenu);
