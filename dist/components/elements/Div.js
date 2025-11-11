import { BaseElements } from "./Base.js";
export class DivElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, contenteditable, spellcheck }) {
        super('div', { id, className, text, dataBsAttributes, ariaAttributes });
        this.div = this.getElement();
        if (contenteditable)
            this.div.contentEditable = contenteditable;
        if (spellcheck)
            this.div.spellcheck = spellcheck;
    }
    getDiv() {
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