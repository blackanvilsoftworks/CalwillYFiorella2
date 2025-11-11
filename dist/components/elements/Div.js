import { BaseElements } from "./Base.js";
export class DivElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, contenteditable, spellcheck }) {
        super('div', { id, className, text, dataBsAttributes, ariaAttributes });
        this.div = this.getElement();
        this.div.contentEditable = contenteditable !== null && contenteditable !== void 0 ? contenteditable : 'false';
        this.div.spellcheck = spellcheck !== null && spellcheck !== void 0 ? spellcheck : false;
    }
    getButton() {
        try {
            return this.div;
        }
        catch (error) {
            console.error(error);
            return document.createElement('div');
        }
    }
}
//# sourceMappingURL=Div.js.map