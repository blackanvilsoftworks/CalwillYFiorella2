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
        const html = `
            <h2 class="text-center mb-4">
                ${createTitle(title, icon).outerHTML}
            </h2>
            <div class="row" id="form-row">
                ${this.createContactForm().outerHTML}
            </div>
            <div class="row mt-3">
                ${this.createContactInfoCard().outerHTML}
            </div>`;
        this.setHTML(html);
    }
    createContactForm() {
        const form = document.createElement('form');
        form.id = 'contact_form';
        form.action = `https://formsubmit.co/${globalInfo.email}`;
        form.method = 'POST';
        form.innerHTML = `
            <!-- Campos ocultos de FormSubmit -->
            <input type="hidden" name="_subject" value="Nuevo mensaje desde la web">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" value="https://blackanvilsoftworks.github.io/CalwillYFiorella/#contact-form-container">
            <input type="hidden" name="_captcha" value="false">
            <div class="col-12 col-md-6 mb-3 px-1">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" name="Nombre" class="form-control" id="name" placeholder="Solo letras" required>
            </div>
            <div class="col-12 col-md-6 mb-3 px-1">
                <label for="phone-number" class="form-label">Número de Teléfono</label>
                <input type="phone-number" name="Teléfono" class="form-control" id="phone-number" placeholder="Sin espacios ni guiones 1122223333" required>
            </div>
            <div class="col-12 mb-3">
                <label for="message" class="form-label">Mensaje</label>
                <textarea class="form-control" name="Mensaje" id="message" rows="3" placeholder="Recibirá una respuesta vía WhatsApp lo más pronto posible." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>`;
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