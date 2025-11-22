import { BaseElements } from "./Base.js";
export class UnorderedListElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, style, role }) {
        super('ul', { id, className, text, dataBsAttributes, ariaAttributes });
        this.style = style;
        this.role = role;
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
        if (this.role)
            this.ul.role = this.role;
    }
}
//# sourceMappingURL=UnorderedList.js.map