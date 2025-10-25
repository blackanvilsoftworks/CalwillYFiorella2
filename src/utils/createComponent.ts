export class Container {
    private element: HTMLDivElement;

    constructor(id: string) {
        this.element = document.createElement('div');
        this.element.id = id;
    }
    
    public getElement(): HTMLDivElement {
        return this.element;
    }

    public setClassNameAndHTML(className: string, innerHTML: string): void {
        this.element.className = className;
        this.element.innerHTML = innerHTML;
    }
}