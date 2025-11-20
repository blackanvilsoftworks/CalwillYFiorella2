import { BaseElements } from "./Base.js";
export class ButtonElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, type }) {
        super('button', { id, className, text, dataBsAttributes, ariaAttributes });
        this.type = type !== null && type !== void 0 ? type : 'button';
        this.button = this.getElement();
        this.finalizeElement();
    }
    finalizeElement() {
        this.button.type = this.type;
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
}
//# sourceMappingURL=Button.js.map