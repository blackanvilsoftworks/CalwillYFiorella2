import { globalInfo } from '../../utils/constants.js';
import { createTitle } from '../../utils/createTitle.js';
import { arrInfoCardContent } from '../../utils/arrays.js';
import { Container } from '../Container.js';
export class ContactForm extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-center mb-4';
        titleElement.appendChild(createTitle(title, icon));
        const contactForm = document.createElement('div');
        contactForm.className = 'row';
        contactForm.id = 'form-row';
        contactForm.appendChild(this.createContactForm());
        const contactInfoCard = document.createElement('div');
        contactInfoCard.className = 'row mt-3';
        contactInfoCard.appendChild(this.createContactInfoCard());
        const html = `
            ${titleElement.outerHTML}
            ${contactForm.outerHTML}
            ${contactInfoCard.outerHTML}`;
        this.setHTML(html);
    }
    createContactForm() {
        const form = document.createElement('form');
        form.id = 'contact_form';
        form.action = `https://formsubmit.co/${globalInfo.email}`;
        form.method = 'POST';
        const input1 = document.createElement('input');
        input1.type = 'hidden';
        input1.name = '_subject';
        input1.value = 'Nuevo mensaje desde la web';
        const input2 = document.createElement('input');
        input2.type = 'hidden';
        input2.name = '_template';
        input2.value = 'table';
        const input3 = document.createElement('input');
        input3.type = 'hidden';
        input3.name = '_next';
        input3.value = 'https://blackanvilsoftworks.github.io/CalwillYFiorella/#contact-form-container';
        const input4 = document.createElement('input');
        input4.type = 'hidden';
        input4.name = '_captcha';
        input4.value = 'false';
        // Campos ocultos de FormSubmit
        form.appendChild(input1);
        form.appendChild(input2);
        form.appendChild(input3);
        form.appendChild(input4);
        const div1 = document.createElement('div');
        div1.className = 'col-12 col-md-6 mb-3 px-1';
        const label1 = document.createElement('label');
        label1.htmlFor = 'name';
        label1.className = 'form-label';
        label1.textContent = 'Nombre';
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.name = 'Nombre';
        inputName.className = 'form-control';
        inputName.id = 'name';
        inputName.placeholder = 'Solo letras';
        inputName.required = true;
        div1.appendChild(label1);
        div1.appendChild(inputName);
        const div2 = document.createElement('div');
        div2.className = 'col-12 col-md-6 mb-3 px-1';
        const label2 = document.createElement('label');
        label2.htmlFor = 'phone-number';
        label2.className = 'form-label';
        label2.textContent = 'Número de Teléfono';
        const inputPhone = document.createElement('input');
        inputPhone.type = 'phone-number';
        inputPhone.name = 'Teléfono';
        inputPhone.className = 'form-control';
        inputPhone.id = 'phone-number';
        inputPhone.placeholder = 'Sin espacios ni guiones 1122223333';
        inputPhone.required = true;
        div2.appendChild(label2);
        div2.appendChild(inputPhone);
        const div3 = document.createElement('div');
        div3.className = 'col-12 mb-3';
        const label3 = document.createElement('label');
        label3.htmlFor = 'message';
        label3.className = 'form-label';
        label3.textContent = 'Mensaje';
        const textarea = document.createElement('textarea');
        textarea.className = 'form-control';
        textarea.name = 'Mensaje';
        textarea.id = 'message';
        textarea.rows = 3;
        textarea.placeholder = 'Recibirá una respuesta vía WhatsApp lo más pronto posible.';
        textarea.required = true;
        div3.appendChild(label3);
        div3.appendChild(textarea);
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'btn btn-primary';
        submitButton.textContent = 'Enviar';
        form.appendChild(div1);
        form.appendChild(div2);
        form.appendChild(div3);
        form.appendChild(submitButton);
        return form;
    }
    createContactInfoCard() {
        const contactInfoCard = document.createElement('div');
        contactInfoCard.className = 'col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-6 ms-auto';
        contactInfoCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Información de Contacto</h5>
                    <div class="container">
                        ${this.createContactInfoCardItems()}
                    </div>
                </div>
            </div>`;
        return contactInfoCard;
    }
    ;
    createContactInfoCardItems() {
        return arrInfoCardContent.map(item => {
            return `
                <div class="row mb-2">
                    <div class="col-1"><i class="${item.icon}"></i></div>
                    <div class="col-11">${item.type}: ${item.value}</div>
                </div>
            `;
        }).join('');
    }
    ;
}
//# sourceMappingURL=ContactForm.js.map