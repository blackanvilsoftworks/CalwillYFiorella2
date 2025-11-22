import { BaseElements } from "./Base.js";
export class SpanElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes }) {
        super('i', { id, className, text, dataBsAttributes, ariaAttributes });
        this.i = this.getElement();
        this.finalizeElement();
    }
    getSpan() {
        try {
            return this.i;
        }
        catch (error) {
            console.error(error);
            return document.createElement('i');
        }
    }
    // No specific attributes for icon at the moment
    finalizeElement() { }
}
//# sourceMappingURL=Icon.js.map