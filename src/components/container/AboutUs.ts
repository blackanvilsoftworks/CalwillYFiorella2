import { Container }        from '../Container.js';
import { DivElement }       from '../elements/Div.js';
import { ImgElement }       from '../elements/Img.js';
import { HeadingElement }   from '../elements/Heading.js';
import { ParagraphElement } from '../elements/Paragraph.js';

import { createTitle }      from '../../utils/createTitle.js';

import { 
    globalInfo, 
    imagesPath 
} from '../../utils/constants.js';



export class AboutUs extends Container{
    
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {
        const div1 = new DivElement({ className: 'row justify-content-center' });

        const div2 = new DivElement({ className: 'col-10' });

        const div3 = new DivElement({ className: 'row' });

        const h2   = new HeadingElement({
            type        : 'h2',
            className   : 'col-12',
        });
        h2.addFirstChild([createTitle(title, icon)]);
        
        const div3_1    = new DivElement({className: 'col-12 col-md-5 col-lg-5 align-content-center'});

        const img       = new ImgElement({
            className   : 'img-fluid',
            src         : `${imagesPath}logo.jpg`,
            alt         : `${globalInfo.name} Logo`
        });

        div3_1.addLastChild([img.getImg()]);

        const div3_2    = new DivElement({className: 'col-12 col-md-7 col-lg-7 px-5 align-self-center'});

        const p1        = new ParagraphElement({
            text: 'En Calwill & Fiorella nos especializamos en la fabricación de calzado infantil de la más alta calidad, con diseños únicos y materiales sostenibles.'
        });
        const p2        = new ParagraphElement({
            text: 'Calwill y Fiorella es una empresa dedicada a ofrecer productos de alta calidad con un enfoque en la sostenibilidad y el diseño innovador. Nuestro compromiso es brindar lo mejor a nuestros clientes, combinando tradición y modernidad.'
        });
        const p3        = new ParagraphElement({
            text: 'Además, somos distribuidores de calzado para hombres y mujeres, ofreciendo una amplia variedad de estilos y tallas para toda la familia.'
        });
        const p4        = new ParagraphElement({
            text: 'Nuestra misión es proporcionar calzado cómodo, durable y a la moda que satisfaga las necesidades de nuestros clientes.'
        });
        
        div3_2.addLastChild([
            p1.getParagraph(),
            p2.getParagraph(),
            p3.getParagraph(),
            p4.getParagraph()
        ]);
        
        div3.addLastChild([
            h2.getHeading(),
            div3_1.getDiv(),
            div3_2.getDiv()
        ]);
        
        div2.addLastChild([div3.getDiv()]);
        div1.addLastChild([div2.getDiv()]);

        this.setHTML(div1.getDiv().outerHTML);
    }
}