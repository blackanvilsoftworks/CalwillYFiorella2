import { Container } from '../Container.js';
import { imagesPath } from '../../utils/constants.js';
import { arrProducts } from '../../utils/arrays.js';
import { createTitle } from '../../utils/createTitle.js';
import { ButtonElement } from '../elements/Button.js';
import { DivElement } from '../elements/Div.js';
export class Products extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const div1 = new DivElement({ className: 'row justify-content-center' });
        const div2 = new DivElement({ className: 'col-10 col-lg-12 px-lg-5' });
        const div3 = new DivElement({ className: 'row' });
        const h = document.createElement('h2');
        h.className = 'text-center';
        h.appendChild(createTitle(title, icon));
        div3.addLastChild(h);
        div3.addLastChild(this.createProductsNav());
        div3.addLastChild(this.createProductsContainers());
        div2.addLastChild(div3.getDiv());
        div1.addLastChild(div2.getDiv());
        this.setHTML(div1.getDiv().outerHTML);
    }
    createProductsNav() {
        const productsNav = document.createElement('ul');
        productsNav.id = 'productsTab';
        productsNav.className = 'nav nav-pills justify-content-center mb-4';
        productsNav.role = 'tablist';
        productsNav.innerHTML = arrProducts.map((product, i) => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.role = 'presentation';
            const button = new ButtonElement({
                id: `${product.id}-tab`,
                text: product.title,
                className: `nav-link btn-primary${i === 0 ? " active" : ""}`,
                dataBsAttributes: [{
                        toggle: 'pill',
                        target: `#${product.id}`,
                    }],
                ariaAttributes: [{
                        selected: i === 0 ? "true" : "false",
                    }]
                // aria_controls: product.id
            });
            li.appendChild(button.getButton());
            return li.outerHTML;
        }).join('');
        return productsNav;
    }
    createProductsContainers() {
        const productContainer = new DivElement({
            id: 'productsTabContent',
            className: 'row',
            ariaAttributes: [{ rol: 'tabpanel' }]
        });
        productContainer.addLastChild(arrProducts.map((product, i) => {
            const div = new DivElement({
                id: product.id,
                className: `tab-pane fade show${i === 0 ? " active" : ""}`,
                ariaAttributes: [{ rol: 'tabpanel' }]
            });
            // div.ariaLabelledby = `${product.id}-tab`;
            div.addLastChild(this.createCarousel(product, i));
            return div.getDiv().outerHTML;
        }).join(''));
        return productContainer.getDiv();
    }
    createCarousel(product, i) {
        const carouselContainer = new DivElement({ className: 'row' });
        carouselContainer.addLastChild(product.cards.map((card, j) => {
            const cardContainer = new DivElement({ className: 'col-12 col-md-6 col-lg-4' });
            const productCard = new DivElement({ className: 'card product-card' });
            const carousel = new DivElement({
                id: `carousel-${product.id}-product${j + 1}`,
                className: 'carousel slide',
                dataBsAttributes: [{ ride: 'carousel' }]
            });
            carousel.addLastChild(this.createCarouselImages(product, card, j));
            carousel.addLastChild(this.createCarouselButtons(carousel.getID(), 'prev'));
            carousel.addLastChild(this.createCarouselButtons(carousel.getID(), 'next'));
            productCard.addLastChild(carousel.getDiv());
            const cardBody = new DivElement({ className: 'card-body' });
            const cardTitle = new DivElement({
                className: 'card-title',
                text: card.title
            });
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = card.description;
            cardBody.addLastChild(cardTitle.getDiv());
            cardBody.addLastChild(cardText);
            productCard.addLastChild(cardBody.getDiv());
            cardContainer.addLastChild(productCard.getDiv());
            return cardContainer.getDiv().outerHTML;
        }).join(''));
        return carouselContainer.getDiv();
    }
    createCarouselImages(product, card, j) {
        const carouselImg = new DivElement({
            className: 'carousel-inner'
        });
        carouselImg.addLastChild(card.carouselImages.map((_, k) => {
            const div = new DivElement({
                className: `carousel-item${k === 0 ? ' active' : ''}`
            });
            const img = document.createElement('img');
            img.src = `${imagesPath}productsContainer/${product.id}/product${j + 1}_img${k + 1}.jpg`;
            img.className = 'd-block w-100';
            img.alt = `Imagen ${k + 1}`;
            div.addLastChild(img);
            return div.getDiv().outerHTML;
        }).join(''));
        return carouselImg.getDiv();
    }
    createCarouselButtons(id, prevOrNext) {
        const btn = new ButtonElement({
            className: `carousel-control-${prevOrNext}`,
            dataBsAttributes: [{
                    target: `#${id}`,
                    slide: prevOrNext,
                }],
        });
        const span1 = document.createElement('span');
        span1.className = `carousel-control-${prevOrNext}-icon`;
        span1.setAttribute('aria-hidden', 'true');
        const span2 = document.createElement('span');
        span2.className = 'visually-hidden';
        span2.textContent = prevOrNext === 'next' ? 'Next' : 'Previous';
        btn.addLastChild(span1);
        btn.addLastChild(span2);
        return btn.getButton();
    }
}
//# sourceMappingURL=Products.js.map