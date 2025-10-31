import { Container } from "../Container.js";
export class Hero extends Container {
    constructor(id, className) {
        super(id, className);
        this.createHTML();
    }
    createHTML() {
        const html = `
            <h1 class="display-4 fw-bold mb-4">Calzado de Calidad para Toda la Familia</h1>
            <p class="lead mb-4 fw-semibold">Fabricamos calzado infantil con los mejores materiales y distribuimos calzado para adultos de las mejores marcas.</p>
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>`;
        this.setHTML(html);
    }
}
//# sourceMappingURL=Hero.js.map