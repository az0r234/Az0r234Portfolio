let projectItems = document.getElementsByClassName('projects__list-item');

for (let i = 0; i < projectItems.length; i++) {
	let projectItem = projectItems[i];
	console.log(projectItem);
	projectItem.addEventListener('mouseenter', (event) => {
		let overlay = projectItem.getElementsByClassName(
			'projects__list-overlay'
		)[0];
		overlay.classList.add('projects__list-overlay--active');
	});

	projectItem.addEventListener('mouseleave', () => {
		let overlay = projectItem.getElementsByClassName(
			'projects__list-overlay'
		)[0];
		overlay.classList.remove('projects__list-overlay--active');
	});
}
