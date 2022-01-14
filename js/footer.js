document.addEventListener('DOMContentLoaded', function() {

  const footer = document.querySelector('.footer');

  function dropDown (list) {
    const footerCategoryList = list.querySelector('.footer__category-item__list');
    footerCategoryList.classList.toggle('dropdown');
  }
  
  function rotate(item) {
    const footerCategoryTitle = item.querySelector('.footer__category-item__title');
    footerCategoryTitle.classList.toggle('rotate');
  }

  
    footer.addEventListener('click', function(e) {
      if (e.target.closest('div').classList.contains('footer__category-item__title'))
      {
        dropDown(this);
        rotate(this);
      } 
    });

});
