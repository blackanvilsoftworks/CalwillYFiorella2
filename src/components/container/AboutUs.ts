import { Container }    from '../Container.js';
import { createTitle }  from '../../utils/createTitle.js';

import { 
    globalInfo, 
    imagesPath 
} from '../../utils/constants.js';
import { DivElement } from '../elements/Div.js';

export class AboutUs extends Container{
    
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {
        const div1 = new DivElement({className: 'row justify-content-center'});

        const div2 = new DivElement({className: 'col-10'});

        const div3 = new DivElement({className: 'row'});

        const h2            = document.createElement('h2');
        h2.className        = 'col-12';
        h2.appendChild(createTitle(title, icon));

        const div3_1 = new DivElement({className: 'col-12 col-md-5 col-lg-5 align-content-center'});

        const img           = document.createElement('img');
        img.src             = `${imagesPath}logo.jpg`;
        img.className       = 'img-fluid';
        img.alt             = `${globalInfo.name} Logo`;
        div3_1.addLastChild(img);

        const div3_2 = new DivElement({className: 'col-12 col-md-7 col-lg-7 px-5 align-self-center'});
        
        const p1            = document.createElement('p');
        p1.textContent      = 'En Calwill & Fiorella nos especializamos en la fabricación de calzado infantil de la más alta calidad, con diseños únicos y materiales sostenibles.';
        
        const p2            = document.createElement('p');
        p2.textContent      = 'Calwill y Fiorella es una empresa dedicada a ofrecer productos de alta calidad con un enfoque en la sostenibilidad y el diseño innovador. Nuestro compromiso es brindar lo mejor a nuestros clientes, combinando tradición y modernidad.';
        
        const p3            = document.createElement('p');
        p3.textContent      = 'Además, somos distribuidores de calzado para hombres y mujeres, ofreciendo una amplia variedad de estilos y tallas para toda la familia.';
        
        const p4            = document.createElement('p');
        p4.textContent      = 'Nuestra misión es proporcionar calzado cómodo, durable y a la moda que satisfaga las necesidades de nuestros clientes.';
        
        div3_2.addLastChild(p1);
        div3_2.addLastChild(p2);
        div3_2.addLastChild(p3);
        div3_2.addLastChild(p4);

        div3.addLastChild(h2);
        div3.addLastChild(div3_1.getDiv());
        div3.addLastChild(div3_2.getDiv());

        div2.addLastChild(div3.getDiv());
        div1.addLastChild(div2.getDiv());

        this.setHTML(div1.getDiv().outerHTML);
    }
}