const navlist = document.querySelector('.nav-list .abt');


navlist.addEventListener('click', () => {
	navlist.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
