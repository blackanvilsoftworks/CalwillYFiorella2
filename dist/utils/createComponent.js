export class Container {
    constructor(id) {
        this.element = document.createElement('div');
        this.element.id = id;
    }
    getElement() {
        return this.element;
    }
    setClassNameAndHTML(className, innerHTML) {
        this.element.className = className;
        this.element.innerHTML = innerHTML;
    }
}
//# sourceMappingURL=createComponent.js.map