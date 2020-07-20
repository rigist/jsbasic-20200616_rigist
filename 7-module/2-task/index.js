import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    //this.open(); //+
   // this.setTitle(); //
   // this.setBody();
   // this.close(); 
    

   this.elemTitle = '';
   this.modalTitle1 = '';
    console.log('constr');
  }

  open(){
    document.body.innerHTML = `<div class="modal">
  <!--Прозрачная подложка перекрывающая интерфейс-->
  <div class="modal__overlay"></div>

  <div class="modal__inner">
    <div class="modal__header">
      <!--Кнопка закрытия модального окна-->
      <button type="button" class="modal__close">
        <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
      </button>

      <h3 class="modal__title">
        ${this.elemTitle.innerHTML = modalTitle1}
      </h3>
    </div>

    <div class="modal__body">
      A сюда нужно добавлять содержимое тела модального окна
    </div>
  </div>`

    document.body.classList.add("is-modal-open")

    console.log('open');
  } //open

  setTitle(modalTitle) {
  //  let modalTitle = 'Modal Title'; //DEL

    //console.log(modalTitle);
    

    this.elemTitle = document.querySelector('.modal__title');

    this.modalTitle1 = modalTitle;

     //elemTitle.innerHTML = modalTitle;

     //console.log('setTitle');
  } //setTitle
/* 
  setBody(node){
   // let node = '<div>Тело модального окна</div>';

  let modBody = document.querySelector('.modal__body');

  modBody.innerText = '';

  modBody.append(node);
  console.log('body');
  } // SetBody */

/*   close(){
    let ModalClose = document.querySelector('.modal__close');

  ModalClose.addEventListener( "click" , () => {
      document.body.classList.remove("is-modal-open");
      document.body.innerHTML = '';}  );

      
  document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape') {
      document.body.classList.remove("is-modal-open");
      document.body.innerHTML = '';
    }
  }); */

  //console.log('close');
  //DELLLLLLLL} //close
}
