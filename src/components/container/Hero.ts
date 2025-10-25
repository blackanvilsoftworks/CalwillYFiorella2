export class Hero {
    private element: HTMLDivElement;
  
    constructor(id: string) {
        this.element = this.createElement(id);
        // this.setupEventListeners();
    }
    
    public getElement(): HTMLDivElement {
        return this.element;
    }

    private createElement (id: string): HTMLDivElement {
        const hero       = document.createElement('div');
        hero.className   = 'hero mt-5 px-3';
        hero.id          = id;
        hero.innerHTML   = `
            <h1 class="display-4 fw-bold mb-4">Calzado de Calidad para Toda la Familia</h1>
            <p class="lead mb-4 fw-semibold">Fabricamos calzado infantil con los mejores materiales y distribuimos calzado para adultos de las mejores marcas.</p>
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>`;
        return hero;
    }
}