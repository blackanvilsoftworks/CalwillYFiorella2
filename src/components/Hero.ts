export class Hero {
    private element: HTMLElement;
  
    constructor() {
        this.element = this.createHero();
        // this.setupEventListeners();
    }
    
    public getElement(): HTMLElement {
        return this.element;
    }
    
    private createHero (): HTMLElement {
        const hero       = document.createElement('div');
        hero.className   = 'hero mt-5 px-3';
        hero.id          = 'hero';
        hero.innerHTML   = `
            <h1 class="display-4 fw-bold mb-4">Calzado de Calidad para Toda la Familia</h1>
            <p class="lead mb-4 fw-semibold">Fabricamos calzado infantil con los mejores materiales y distribuimos calzado para adultos de las mejores marcas.</p>
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>`;
        return hero;
    }
}