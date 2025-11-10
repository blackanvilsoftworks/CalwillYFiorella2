import { BaseElements } from "./Base.js";
export class ButtonElement extends BaseElements {
    constructor({ id, className, type, text, dataBsAttributes, ariaAttributes }) {
        super('button', { id, className, text, dataBsAttributes, ariaAttributes });
        this.button = this.getElement();
        this.button.type = type !== null && type !== void 0 ? type : 'button';
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
        if (typeof element === 'string') {
            this.button.prepend(document.createTextNode(element));
        }
        else {
            this.button.prepend(element);
        }
    }
    addLastChild(element) {
        if (typeof element === 'string') {
            this.button.appendChild(document.createTextNode(element));
        }
        else {
            this.button.appendChild(element);
        }
    }
}
//# sourceMappingURL=Button.js.map