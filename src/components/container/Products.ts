import { Container }        from '../Container.js';
import { DivElement }       from '../elements/Div.js';
import { ImgElement }       from '../elements/Img.js';
import { ButtonElement }    from '../elements/Button.js';

import { imagesPath }       from '../../utils/constants.js';
import { arrProducts }      from '../../utils/arrays.js';
import { createTitle }      from '../../utils/createTitle.js';

import { iArrProduct }      from '../../interfaces/iArrProduct.js';
import { iProductCard }     from '../../interfaces/iProductCard.js';

export class Products extends Container{
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {

        const div1  = new DivElement({className: 'row justify-content-center'});
        
        const div2  = new DivElement({className: 'col-10 col-lg-12 px-lg-5'});
        
        const div3  = new DivElement({className: 'row'});
        
        const h     = document.createElement('h2');
        h.className = 'text-center';
        h.appendChild(createTitle(title, icon));

        div3.addLastChild([
            h,
            this.createProductsNav(),
            this.createProductsContainers()
        ]);
        
        div2.addLastChild([div3.getDiv()]);
        div1.addLastChild([div2.getDiv()]);

        this.setHTML(div1.getDiv().outerHTML);
    }

    private createProductsNav (): HTMLUListElement {
        const productsNav       = document.createElement('ul');
        productsNav.id          = 'productsTab';
        productsNav.className   = 'nav nav-pills justify-content-center mb-4';
        productsNav.role        = 'tablist';
        productsNav.innerHTML   = arrProducts.map((product, i) => {
            const li        = document.createElement('li');
            li.className    = 'nav-item';
            li.role         = 'presentation';

            const button = new ButtonElement({
                id              : `${product.id}-tab`,
                text            : product.title,
                className       : `nav-link btn-primary${i === 0 ? " active" : ""}`,
                dataBsAttributes: [{
                    toggle  : 'pill',
                    target  : `#${product.id}`,
                }],
                ariaAttributes  : [{
                    selected: i === 0 ? "true" : "false",
                }]
                // aria_controls: product.id
            });

            li.appendChild(button.getButton());

            return li.outerHTML;
        }).join('');
        return productsNav;
    }

    private createProductsContainers (): HTMLDivElement {
        const productContainer = new DivElement({
            id              : 'productsTabContent',
            className       : 'tab-content',
            ariaAttributes  : [{rol: 'tabpanel'}]
        });

        arrProducts.forEach((product, i) => {
            const div = new DivElement({
                id              : product.id,
                className       : `tab-pane fade show${i === 0 ? " active" : ""}`,
                ariaAttributes  : [{rol: 'tabpanel'}]
            });
            // div.ariaLabelledby = `${product.id}-tab`;
            div.addLastChild([this.createCarousel(product, i)]);
            productContainer.addLastChild([div.getDiv()]);
        });
        return productContainer.getDiv();
    }

    private createCarousel (product: iArrProduct, i: number): HTMLDivElement {
        const carouselContainer = new DivElement({className: 'row'});

        product.cards.forEach((card, j) => {
            const cardContainer = new DivElement({className: 'col-12 col-md-6 col-lg-4'});

            const productCard   = new DivElement({className: 'card product-card'});

            const carousel      = new DivElement({
                id              : `carousel-${product.id}-product${j + 1}`,
                className       : 'carousel slide',
                dataBsAttributes: [{ride: 'carousel'}]
            });

            carousel.addLastChild([
                this.createCarouselImages(product, card, j),
                this.createCarouselButtons(carousel.getID()!, 'prev'),
                this.createCarouselButtons(carousel.getID()!, 'next')
            ]);

            productCard.addLastChild([carousel.getDiv()]);

            const cardBody = new DivElement({className: 'card-body'});
            
            const cardTitle = new DivElement({
                className: 'card-title', 
                text: card.title
            });
            
            const cardText          = document.createElement('p');
            cardText.className      = 'card-text';
            cardText.textContent    = card.description;

            cardBody.addLastChild([
                cardTitle.getDiv(),
                cardText
            ]);

            productCard.addLastChild([cardBody.getDiv()]);

            cardContainer.addLastChild([productCard.getDiv()]);

            carouselContainer.addLastChild([cardContainer.getDiv()]);
        });
        
        return carouselContainer.getDiv();
    }

    private createCarouselImages (product: iArrProduct, card: iProductCard, j: number): HTMLDivElement {
        const carouselImg = new DivElement({
            className: 'carousel-inner'
        });
        
        card.carouselImages.forEach((_, k) => {
            const div = new DivElement({
                className: `carousel-item${k === 0 ? ' active' : ''}`
            });

            const img = new ImgElement({
                src         : `${imagesPath}productsContainer/${product.id}/product${j + 1}_img${k + 1}.jpg`,
                alt         : `Imagen ${k + 1}`,
                className   : 'd-block w-100',
            });

            div.addLastChild([img.getImg()]);

            carouselImg.addLastChild([div.getDiv()]);
        });

        return carouselImg.getDiv();
    }

    private createCarouselButtons (id: string, prevOrNext: 'prev' | 'next'): HTMLButtonElement {
        const btn = new ButtonElement({
            className       : `carousel-control-${prevOrNext}`,
            dataBsAttributes: [{
                target  : `#${id}`,
                slide   : prevOrNext,
            }],
        });
        
        const span1             = document.createElement('span');
        span1.className         = `carousel-control-${prevOrNext}-icon`;
        span1.setAttribute('aria-hidden', 'true');

        const span2             = document.createElement('span');
        span2.className         = 'visually-hidden';
        span2.textContent       = prevOrNext === 'next' ? 'Next' : 'Previous';

        btn.addLastChild([
            span1,
            span2
        ]);
        
        return btn.getButton();
    }
}