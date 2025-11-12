import { globalInfo }           from '../../utils/constants.js';
import { createTitle }          from '../../utils/createTitle.js';
import { arrInfoCardContent }   from '../../utils/arrays.js';
import { Container }            from '../Container.js';
import { ButtonElement } from '../elements/Button.js';
import { DivElement } from '../elements/Div.js';

export class ContactForm extends Container {
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {
        const titleElement = document.createElement('h2');
        titleElement.className = 'text-center mb-4';
        titleElement.append(createTitle(title, icon));

        const contactForm = new DivElement({
            id          : 'form-row',
            className   : 'row'
        });
        contactForm.addLastChild([this.createContactForm()]);

        const contactInfoCard = new DivElement({className: 'row mt-3'});
        contactInfoCard.addLastChild([this.createContactInfoCard()]);

        const html = `
            ${titleElement.outerHTML}
            ${contactForm.getDiv().outerHTML}
            ${contactInfoCard.getDiv().outerHTML}`;
        this.setHTML(html);
    }
    
    private createContactForm (): HTMLFormElement {
        const form      = document.createElement('form');
        form.id         = 'contact_form';
        form.action     = `https://formsubmit.co/${globalInfo.email}`;
        form.method     = 'POST';

        const input1    = document.createElement('input');
        input1.type     = 'hidden';
        input1.name     = '_subject';
        input1.value    = 'Nuevo mensaje desde la web';

        const input2    = document.createElement('input');
        input2.type     = 'hidden';
        input2.name     = '_template';
        input2.value    = 'table';

        const input3    = document.createElement('input');
        input3.type     = 'hidden';
        input3.name     = '_next';
        input3.value    = 'https://blackanvilsoftworks.github.io/CalwillYFiorella/#contact-form-container';

        const input4    = document.createElement('input');
        input4.type     = 'hidden';
        input4.name     = '_captcha';
        input4.value    = 'false';

        // Campos ocultos de FormSubmit
        form.append(input1);
        form.append(input2);
        form.append(input3);
        form.append(input4);

        const div1 = new DivElement({className: 'col-12 col-md-6 mb-3 px-1'});
        
        const label1            = document.createElement('label');
        label1.htmlFor          = 'name';
        label1.className        = 'form-label';
        label1.textContent      = 'Nombre';

        const inputName         = document.createElement('input');
        inputName.type          = 'text';
        inputName.name          = 'Nombre';
        inputName.className     = 'form-control';
        inputName.id            = 'name';
        inputName.placeholder   = 'Solo letras';
        inputName.required      = true;

        div1.addLastChild([
            label1,
            inputName
        ]);
        
        const div2 = new DivElement({className: 'col-12 col-md-6 mb-3 px-1'});
        
        const label2            = document.createElement('label');
        label2.htmlFor          = 'phone-number';
        label2.className        = 'form-label';
        label2.textContent      = 'Número de Teléfono';

        const inputPhone        = document.createElement('input');
        inputPhone.type         = 'phone-number';
        inputPhone.name         = 'Teléfono';
        inputPhone.className    = 'form-control';
        inputPhone.id           = 'phone-number';
        inputPhone.placeholder  = 'Sin espacios ni guiones 1122223333';
        inputPhone.required     = true;

        div2.addLastChild([
            label2,
            inputPhone
        ]);

        const div3 = new DivElement({className: 'col-12 mb-3'});

        const label3            = document.createElement('label');
        label3.htmlFor          = 'message';
        label3.className        = 'form-label';
        label3.textContent      = 'Mensaje';

        const textarea          = document.createElement('textarea');
        textarea.className      = 'form-control';
        textarea.name           = 'Mensaje';
        textarea.id             = 'message';
        textarea.rows           = 3;
        textarea.placeholder    = 'Recibirá una respuesta vía WhatsApp lo más pronto posible.';
        textarea.required       = true;

        div3.addLastChild([
            label3,
            textarea
        ]);

        const submitButton          = new ButtonElement({
            text        : 'Enviar',
            type        : 'submit',
            className   : 'btn btn-primary'
        });

        form.append(div1.getDiv());
        form.append(div2.getDiv());
        form.append(div3.getDiv());
        form.append(submitButton.getButton());
        return form;
    }

    private createContactInfoCard (): HTMLDivElement {
        const contactInfoCard   = new DivElement({className: 'col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-6 ms-auto'});

        const cardHeader        = new DivElement({className: 'card h-100'});
        
        const cardBody          = new DivElement({className: 'card-body'});
        
        const cardTitle         = document.createElement('h5');
        cardTitle.className     = 'card-title';
        cardTitle.textContent   = 'Información de Contacto';

        const container         = new DivElement({className: 'container'});
        container.addLastChild(this.createContactInfoCardItems(), 'innerHTML');

        cardBody.addLastChild([
            cardTitle,
            container.getDiv()
        ]);
        cardHeader.addLastChild([cardBody.getDiv()]);
        contactInfoCard.addLastChild([cardHeader.getDiv()]);

        return contactInfoCard.getDiv();
    };

    private createContactInfoCardItems (): string {
        return arrInfoCardContent.map(item => {
            const container = new DivElement({className: 'row mb-2'});
            
            const iconDiv   = new DivElement({className: 'col-1'});
            
            const icon      = document.createElement('i');
            icon.className  = item.icon;

            iconDiv.addLastChild([icon]);

            const infoDiv   = new DivElement({
                className: 'col-11', 
                text: `${item.type}: ${item.value}`
            });

            container.addLastChild([iconDiv.getDiv()]);
            container.addLastChild([infoDiv.getDiv()]);

            return container.getDiv().outerHTML;
        }).join('');
    };
}

