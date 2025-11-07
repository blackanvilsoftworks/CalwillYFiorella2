export class ButtonElement {
    constructor({ id, className, type, text }) {
        this.button = document.createElement('button');
        this.button.id = id !== null && id !== void 0 ? id : '';
        this.button.className = className !== null && className !== void 0 ? className : '';
        this.button.type = type !== null && type !== void 0 ? type : 'button';
        // this.button.innerHTML = text ?? '';
        this.button.appendChild(document.createTextNode(text !== null && text !== void 0 ? text : ''));
    }
    getButton() {
        try {
            return this.button;
        }
        catch (error) {
            console.error(error);
            return document.createElement('button');
        }
    }
    addFirstChild(element) {
        this.button.prepend(element);
    }
    addLastChild(element) {
        this.button.appendChild(element);
    }
}
//# sourceMappingURL=Button.js.map