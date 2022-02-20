const popup = () => {
    const buttonsPlay = document.querySelectorAll('[data-video="play"]'),
        popup = document.querySelector('.popup');


    buttonsPlay.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        })
    });

    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    popup.addEventListener('click', (e) => {
        if (e.target === popup || e.target.classList.contains('popup-header__close')) {
            closeModal('.popup');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && popup.classList.contains('active')) {
            closeModal('.popup');
        }
    });
}

export default popup;