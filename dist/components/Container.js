export class Container {
    constructor(id, className) {
        this.container = document.createElement('div');
        this.container.id = id;
        this.container.className = className;
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
            return document.createElement('div');
        }
    }
    setHTML(html) {
        this.container.innerHTML = html;
    }
}
//# sourceMappingURL=Container.js.map