import { BaseElements } from "./Base.js";
export class SpanElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes }) {
        super('span', { id, className, text, dataBsAttributes, ariaAttributes });
        this.span = this.getElement();
        this.finalizeElement();
    }
    getSpan() {
        try {
            return this.span;
        }
        catch (error) {
            console.error(error);
            return document.createElement('span');
        }
    }
    // No specific attributes for span at the moment
    finalizeElement() { }
}
//# sourceMappingURL=Span.js.map