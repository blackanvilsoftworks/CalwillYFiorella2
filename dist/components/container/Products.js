import { Container } from '../Container.js';
import { imagesPath } from '../../utils/constants.js';
import { arrProducts } from '../../utils/arrays.js';
import { createTitle } from '../../utils/createTitle.js';
export class Products extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const div1 = document.createElement('div');
        div1.className = 'row justify-content-center';
        const div2 = document.createElement('div');
        div2.className = 'col-10 col-lg-12 px-lg-5';
        const div3 = document.createElement('div');
        div3.className = 'row';
        const h = document.createElement('h2');
        h.className = 'text-center';
        h.appendChild(createTitle(title, icon));
        div3.appendChild(h);
        div3.appendChild(this.createProductsNav());
        div3.appendChild(this.createProductsContainers());
        div2.appendChild(div3);
        div1.appendChild(div2);
        this.setHTML(div1.innerHTML);
    }
    createProductsNav() {
        const productsNav = document.createElement('ul');
        productsNav.id = 'productsTab';
        productsNav.className = 'nav nav-pills justify-content-center mb-4';
        productsNav.role = 'tablist';
        productsNav.innerHTML = arrProducts.map((product, i) => {
            return `
                <li class="nav-item" role="presentation">
                    <button class="nav-link btn-primary${i === 0 ? " active" : ""}" id="${product.id}-tab" data-bs-toggle="pill" data-bs-target="#${product.id}" type="button" role="tab" aria-controls="${product.id}" aria-selected="${i === 0 ? "true" : "false"}">${product.title}</button>
                </li>`;
        }).join('');
        return productsNav;
    }
    createProductsContainers() {
        const productContainer = document.createElement('div');
        productContainer.id = 'productsTabContent';
        productContainer.className = 'tab-content';
        productContainer.innerHTML = arrProducts.map((product, i) => {
            return `
                <div class="tab-pane fade show${i === 0 ? " active" : ""}" id="${product.id}" role="tabpanel" aria-labelledby="${product.id}-tab">
                    ${this.createCarousel(product, i).outerHTML}
                </div>`;
        }).join('');
        return productContainer;
    }
    createCarousel(product, i) {
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'row';
        carouselContainer.innerHTML = product.cards.map((card, j) => {
            const id = `carousel-${product.id}-product${j + 1}`;
            return `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card product-card">
                        <div id="${id}" class="carousel slide" data-bs-ride="carousel">
                            ${this.createCarouselImages(product, card, j).outerHTML}
                            ${this.createCarouselButtons(id, 'prev').outerHTML}
                            ${this.createCarouselButtons(id, 'next').outerHTML}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                        </div>
                    </div>
                </div>`;
        }).join('');
        return carouselContainer;
    }
    createCarouselImages(product, card, j) {
        const carouselImg = document.createElement('div');
        carouselImg.className = 'carousel-inner';
        carouselImg.innerHTML = card.carouselImages.map((_, k) => {
            return `
                <div class="carousel-item${k === 0 ? ' active' : ''}">
                    <img src="${imagesPath}productsContainer/${product.id}/product${j + 1}_img${k + 1}.jpg" class="d-block w-100" alt="Imagen ${k + 1}" />
                </div>`;
        }).join('');
        return carouselImg;
    }
    createCarouselButtons(id, prevOrNext) {
        const btn = document.createElement('button');
        btn.className = `carousel-control-${prevOrNext}`;
        btn.type = 'button';
        btn.dataset.bsTarget = `#${id}`;
        btn.dataset.bsSlide = prevOrNext;
        const span1 = document.createElement('span');
        span1.className = `carousel-control-${prevOrNext}-icon`;
        span1.setAttribute('aria-hidden', 'true');
        const span2 = document.createElement('span');
        span2.className = 'visually-hidden';
        span2.textContent = prevOrNext === 'next' ? 'Next' : 'Previous';
        btn.appendChild(span1);
        btn.appendChild(span2);
        return btn;
    }
}
//# sourceMappingURL=Products.js.map