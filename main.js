const openCvBtns = document.querySelector('.open-dialog');
const cvDialog = document.querySelector('.dialog');
const closeCvBtn = cvDialog.querySelector('.close-dialog');

// cvDialog.showModal();

openCvBtns?.addEventListener('click', () => {
    cvDialog?.showModal();
    document.body.style.overflow = 'hidden';
}, false);

cvDialog?.addEventListener('click', ()=> {
    cvDialog.close();
}, false);

cvDialog?.addEventListener('close', () => {
    document.body.style.overflow = 'auto';     
}, false);