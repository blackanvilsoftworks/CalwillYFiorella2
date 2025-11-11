import { BaseElements } from "./Base.js";
export class ButtonElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, type }) {
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
}
//# sourceMappingURL=Button.js.map