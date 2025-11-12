import { DivElement } from "./elements/Div";
export class Container {
    constructor(id, className) {
        this.container = new DivElement({ id, className }).getDiv();
    }
    getContainer() {
        try {
            if (!this.container.innerHTML) {
                throw new Error(`Element id:${this.container.id} has no innerHTML set.`);
            }
            return this.container;
        }
        catch (error) {
            console.error(error);
            return new DivElement({}).getDiv();
        }
    }
    setHTML(html) {
        this.container.innerHTML = html;
    }
}
//# sourceMappingURL=Container.js.map