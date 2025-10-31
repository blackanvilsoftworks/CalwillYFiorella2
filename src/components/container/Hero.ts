import { Container } from "../Container.js";

export class Hero extends Container {
    constructor(id: string, className: string) {
        super(id, className);
        this.createHTML();
    }
    
    private createHTML (): void {
        const html = `
            <h1 class="display-4 fw-bold mb-4">Calzados para Toda la Familia</h1>
            <p class="lead mb-4 fw-semibold">Somos distribuidores de una gran variedad de modelos de calzado infantil y calzado para adultos.</p>
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>`;
        this.setHTML(html);
    }
}