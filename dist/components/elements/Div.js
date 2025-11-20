import { BaseElements } from "./Base.js";
export class DivElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, contenteditable, spellcheck }) {
        super('div', { id, className, text, dataBsAttributes, ariaAttributes });
        this.contenteditable = contenteditable;
        this.spellcheck = spellcheck;
        this.div = this.getElement();
        this.finalizeElement();
    }
    finalizeElement() {
        if (this.contenteditable)
            this.div.contentEditable = this.contenteditable;
        if (this.spellcheck)
            this.div.spellcheck = this.spellcheck;
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