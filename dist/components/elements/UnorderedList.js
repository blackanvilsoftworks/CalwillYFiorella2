import { BaseElements } from "./Base.js";
export class UnorderedListElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, style, }) {
        super('ul', { id, className, text, dataBsAttributes, ariaAttributes });
        this.style = style;
        this.ul = this.getElement();
        this.finalizeElement();
    }
    getUnorderedList() {
        try {
            if (!this.ul.hasChildNodes()) {
                throw new Error('The unordered list has no list items.');
            }
            return this.ul;
        }
        catch (error) {
            console.error(error);
            return document.createElement('ul');
        }
    }
    finalizeElement() {
        if (this.style)
            this.ul.style = this.style;
    }
}
//# sourceMappingURL=UnorderedList.js.map