import { Container }    from '../Container.js';

import { imagesPath }   from '../../utils/constants.js';
import { arrProducts }  from '../../utils/arrays.js';
import { createTitle }  from '../../utils/createTitle.js';

import { ArrProduct }   from '../../interfaces/ArrProduct.js';
import { ProductCard }  from '../../interfaces/ProductCard.js';
import { ButtonElement } from '../elements/Button.js';

export class Products extends Container{
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {
        const div1      = document.createElement('div');
        div1.className  = 'row justify-content-center';

        const div2      = document.createElement('div');
        div2.className  = 'col-10 col-lg-12 px-lg-5';

        const div3      = document.createElement('div');
        div3.className  = 'row';

        const h         = document.createElement('h2');
        h.className     = 'text-center';
        h.appendChild(createTitle(title, icon));

        div3.appendChild(h);
        div3.appendChild(this.createProductsNav());
        div3.appendChild(this.createProductsContainers());

        div2.appendChild(div3);
        div1.appendChild(div2);

        this.setHTML(div1.outerHTML);
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
        const productContainer       = document.createElement('div');
        productContainer.id          = 'productsTabContent';
        productContainer.className   = 'tab-content';
        productContainer.innerHTML   = arrProducts.map((product, i) => {
            const div       = document.createElement('div');
            div.className   = `tab-pane fade show${i === 0 ? " active" : ""}`;
            div.id          = product.id;
            div.role        = 'tabpanel';
            // div.ariaLabelledby = `${product.id}-tab`;
            div.appendChild(this.createCarousel(product, i));
            
            return div.outerHTML;
        }).join('');
        return productContainer;
    }

    private createCarousel (product: ArrProduct, i: number): HTMLDivElement {
        const carouselContainer       = document.createElement('div');
        carouselContainer.className   = 'row';
        carouselContainer.innerHTML   = product.cards.map((card, j) => {
            const cardContainer                 = document.createElement('div');
            cardContainer.className             = 'col-12 col-md-6 col-lg-4';

            const productCard                   = document.createElement('div');
            productCard.className               = 'card product-card';

            const carouselContainer             = document.createElement('div');
            carouselContainer.id                = `carousel-${product.id}-product${j + 1}`;
            carouselContainer.className         = 'carousel slide';
            carouselContainer.dataset.bsRide    = 'carousel';

            carouselContainer.appendChild(this.createCarouselImages(product, card, j));
            carouselContainer.appendChild(this.createCarouselButtons(carouselContainer.id, 'prev'));
            carouselContainer.appendChild(this.createCarouselButtons(carouselContainer.id, 'next'));

            productCard.appendChild(carouselContainer);

            const cardBody          = document.createElement('div');
            cardBody.className      = 'card-body';

            const cardTitle         = document.createElement('h5');
            cardTitle.className     = 'card-title';
            cardTitle.textContent   = card.title;

            const cardText          = document.createElement('p');
            cardText.className      = 'card-text';
            cardText.textContent    = card.description;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            productCard.appendChild(cardBody);

            cardContainer.appendChild(productCard);

            return cardContainer.outerHTML;
        }).join('');
        return carouselContainer;
    }

    private createCarouselImages (product: ArrProduct, card: ProductCard, j: number): HTMLDivElement {
        const carouselImg       = document.createElement('div');
        carouselImg.className   = 'carousel-inner';
        carouselImg.innerHTML   = card.carouselImages.map((_, k) => {
            const div       = document.createElement('div');
            div.className   = `carousel-item${k === 0 ? ' active' : ''}`;

            const img       = document.createElement('img');
            img.src         = `${imagesPath}productsContainer/${product.id}/product${j + 1}_img${k + 1}.jpg`;
            img.className   = 'd-block w-100';
            img.alt         = `Imagen ${k + 1}`;

            div.appendChild(img);

            return div.outerHTML;
        }).join('');
        return carouselImg;
    }

    private createCarouselButtons (id: string, prevOrNext: 'prev' | 'next'): HTMLButtonElement {
        const btn               = new ButtonElement({
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

        btn.addLastChild(span1);
        btn.addLastChild(span2);

        return btn.getButton();
    }
}
