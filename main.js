!function(){"use strict";class t{constructor(){this.showFormBtn=document.querySelector(".show__form-btn"),this.formContainer=document.querySelector(".form__container"),this.contactForm=document.querySelector(".contact__form"),this.closeBtn=document.querySelector(".close__btn"),this.init()}init(){this.showFormBtn.addEventListener("click",(()=>this.showForm())),this.closeBtn.addEventListener("click",(()=>this.closeForm())),this.contactForm.addEventListener("submit",(t=>this.submitForm(t)))}showForm(){this.showFormBtn.style.display="none",this.formContainer.classList.add("visible")}closeForm(){this.formContainer.classList.remove("visible"),setTimeout((()=>{this.showFormBtn.style.display="block"}),100)}submitForm(t){t.preventDefault(),this.closeForm()}}class e{constructor(){this.collapseBtn=document.querySelector(".collapse__btn"),this.showDescription=document.querySelector(".show__description"),this.copyBtn=document.querySelector(".copy__text"),this.textToCopy=document.querySelector(".text").textContent,this.init()}init(){this.collapseBtn.addEventListener("click",(()=>this.toggleDescription())),this.copyBtn.addEventListener("click",(t=>this.copyText(t)))}toggleDescription(){this.showDescription.classList.toggle("show")}copyText(t){t.preventDefault(),navigator.clipboard.writeText(this.textToCopy).then((()=>console.log("Текст скопирован в буфер!"))).catch((t=>console.error(`Ошибка копирования текста: ${t}`)))}}document.addEventListener("DOMContentLoaded",(()=>{new e,new t}))}();
//# sourceMappingURL=main.js.map