const showSelect = () => {
    const selectBtn = document.querySelector('.header-select'),
        select = document.querySelector('.header-select__content'),
        selectImg = document.querySelector('.header-select__header_img'),
        main = document.querySelector('.main');

    main.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('header-select__header') || target.classList.contains('header-select__header_current') || target.classList.contains('header-select__header_img')) {
            select.classList.toggle('header-select__content_active');
            selectImg.classList.toggle('header-select__header_img_active');
        }
        if (target.classList.contains('main') || target.classList.contains('tabs') || target.classList.contains('cards') || target.classList.contains('card')) {
            select.classList.remove('header-select__content_active');
            selectImg.classList.remove('header-select__header_img_active');
        }




    })
}

export default showSelect;