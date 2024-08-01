export default class CollapseWidget {
    constructor() {
      this.collapseBtn = document.querySelector('.collapse__btn');
      this.showDescription = document.querySelector('.show__description');
      this.copyBtn = document.querySelector('.copy__text');
      this.textToCopy = document.querySelector('.text').textContent;
      this.init();
    }
  
    init() {
      this.collapseBtn.addEventListener('click', () => this.toggleDescription());
      this.copyBtn.addEventListener('click', (event) => this.copyText(event));
    }
  
    toggleDescription() {
      this.showDescription.classList.toggle('show');
    }
  
    copyText(event) {
      event.preventDefault();
      navigator.clipboard.writeText(this.textToCopy)
        .then(() => console.log('Текст скопирован в буфер!'))
        .catch((err) => console.error(`Ошибка копирования текста: ${err}`));
    }
  }
  