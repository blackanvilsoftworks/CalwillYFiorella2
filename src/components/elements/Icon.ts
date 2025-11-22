import { BaseElements } from "./Base.js";
import { iIconElement } from "../../interfaces/elements/iIconElement.js";

export class SpanElement extends BaseElements{
    private i      : iIconElement;

    constructor ({  
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes
        }: iIconElement) {
        super('i', {id, className, text, dataBsAttributes, ariaAttributes});

        this.i = this.getElement() as iIconElement;
        this.finalizeElement();
    }

    public getSpan (): iIconElement {
        try {
            return this.i;
        } catch (error) {
            console.error(error);
            return document.createElement('i');
        }
    }

    // No specific attributes for icon at the moment
    protected finalizeElement (): void {}
}