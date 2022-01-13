document.addEventListener('DOMContentLoaded', function() {

  const footerCategoryItem = document.querySelectorAll('.footer__category-item');

  function dropDown (list) {
    const footerCategoryList = list.querySelector('.footer__category-item__list');
    footerCategoryList.classList.toggle('dropdown');
  }
  
  function rotate(item) {
    item.classList.toggle('rotate');
  }

  footerCategoryItem.forEach((item) => {
    item.addEventListener('click', function(e) {
      console.log('hi');
      if (e.target === this.querySelector('.footer__category-item__title') || e.target === this.querySelector('.footer__category-item__title > svg'))
      {
        dropDown(this);
        rotate(this);
      }
    });
  });

});