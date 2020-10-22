function modal(modalTriggerSelector, modalWindowSelector, closeBtnSelector) {
    const modalBtn = document.querySelectorAll(modalTriggerSelector);

    const modal = document.querySelector(modalWindowSelector);

    const closeBtn = document.querySelector(closeBtnSelector);



    modalBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
            }
            modal.classList.add('show');
            modal.classList.remove('hide');
        });
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            modal.classList.add('hide');
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.classList.add('hide');
    });

    function showModalTimeout(modalSelector, timer) {
        setTimeout(() => {
            document.querySelector(modalSelector).classList.add('show');
        }, timer);
    }

    showModalTimeout('.popup', 60000);


}

export default modal;