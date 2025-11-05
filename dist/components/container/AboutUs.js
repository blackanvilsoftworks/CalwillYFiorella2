import { Container } from '../Container.js';
import { createTitle } from '../../utils/createTitle.js';
import { globalInfo, imagesPath } from '../../utils/constants.js';
export class AboutUs extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const div1 = document.createElement('div');
        div1.className = 'row justify-content-center';
        const div2 = document.createElement('div');
        div2.className = 'col-10';
        const div3 = document.createElement('div');
        div3.className = 'row';
        const h2 = document.createElement('h2');
        h2.className = 'col-12';
        h2.appendChild(createTitle(title, icon));
        const div3_1 = document.createElement('div');
        div3_1.className = 'col-12 col-md-5 col-lg-5 align-content-center';
        const img = document.createElement('img');
        img.src = `${imagesPath}logo.jpg`;
        img.className = 'img-fluid';
        img.alt = `${globalInfo.name} Logo`;
        div3_1.appendChild(img);
        const div3_2 = document.createElement('div');
        div3_2.className = 'col-12 col-md-7 col-lg-7 px-5 align-self-center';
        const p1 = document.createElement('p');
        p1.textContent = 'En Calwill & Fiorella nos especializamos en la fabricación de calzado infantil de la más alta calidad, con diseños únicos y materiales sostenibles.';
        const p2 = document.createElement('p');
        p2.textContent = 'Calwill y Fiorella es una empresa dedicada a ofrecer productos de alta calidad con un enfoque en la sostenibilidad y el diseño innovador. Nuestro compromiso es brindar lo mejor a nuestros clientes, combinando tradición y modernidad.';
        const p3 = document.createElement('p');
        p3.textContent = 'Además, somos distribuidores de calzado para hombres y mujeres, ofreciendo una amplia variedad de estilos y tallas para toda la familia.';
        const p4 = document.createElement('p');
        p4.textContent = 'Nuestra misión es proporcionar calzado cómodo, durable y a la moda que satisfaga las necesidades de nuestros clientes.';
        div3_2.appendChild(p1);
        div3_2.appendChild(p2);
        div3_2.appendChild(p3);
        div3_2.appendChild(p4);
        div3.appendChild(h2);
        div3.appendChild(div3_1);
        div3.appendChild(div3_2);
        div2.appendChild(div3);
        div1.appendChild(div2);
        this.setHTML(div1.outerHTML);
    }
}
//# sourceMappingURL=AboutUs.js.map