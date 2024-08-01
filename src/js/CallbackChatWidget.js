export default class CallbackChatWidget {
    constructor() {
      this.showFormBtn = document.querySelector('.show__form-btn');
      this.formContainer = document.querySelector('.form__container');
      this.contactForm = document.querySelector('.contact__form');
      this.closeBtn = document.querySelector('.close__btn');
  
      this.init();
    }
  
    init() {
      this.showFormBtn.addEventListener('click', () => this.showForm());
      this.closeBtn.addEventListener('click', () => this.closeForm());
      this.contactForm.addEventListener('submit', (e) => this.submitForm(e));
    }
  
    showForm() {
      this.showFormBtn.style.display = 'none';
      this.formContainer.classList.add('visible');
    }
  
    closeForm() {
      this.formContainer.classList.remove('visible');
      setTimeout(() => {
        this.showFormBtn.style.display = 'block';
      }, 100);
    }
  
    submitForm(e) {
      e.preventDefault();
      this.closeForm();
    }
  }
  