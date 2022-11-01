class Prodject {
	constructor() {
		this.addEvent();
	}

	addEvent() {
		let menuBtn = document.querySelector('.menu-btn');

		menuBtn.addEventListener('click', e => {
			this.dropMenu(menuBtn);
		});

		document.querySelectorAll('.drop-menu-nav li').forEach(element => {
			element.addEventListener('click', e => {
				this.dropMenu(menuBtn);
			});
		});
	}

	dropMenu(menuBtn) {
		menuBtn.classList.toggle('active');
		document.querySelector('.drop-menu-container').classList.toggle('hide');
		document.querySelector('body').classList.toggle('menu-open');
	}
}

let options = {
	textFont: "'Barlow Condensed', sans-serif",
	textColour : '#87C232',
	textHeight: 24,
	outlineThickness : 1,
	maxSpeed : .05,
	depth : .8,
	noSelect: true,
	noMouse: true,
	initial: [.2, -.05],
};

window.onload = function() {
	console.log('script started.');

	TagCanvas.Start('myCanvas', '', options);

	new Prodject();
};
