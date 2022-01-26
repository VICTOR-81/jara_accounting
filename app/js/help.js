document.addEventListener('DOMContentLoaded', function () {

  const help = document.querySelector('.help');

  help.addEventListener('click', function (e) {
		const target = e.target.closest('div');
		if (target.classList.contains('help__item-title') && !target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight =
				target.parentElement.children[1].children.length * target.parentElement.children[1].children[0].offsetHeight + 'px';
			target.classList.add('list_item___open');
		} else if (target.classList.contains('help__item-title') && target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight = 0;
			target.classList.remove('list_item___open');
		}
	});

});