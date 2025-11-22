import { BaseElements } from "./Base.js";
import { iSpanElement } from "../../interfaces/elements/iSpanElement.js";

export class SpanElement extends BaseElements{
    private span      : HTMLSpanElement;

    constructor ({  
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes
        }: iSpanElement) {
        super('span', {id, className, text, dataBsAttributes, ariaAttributes});

        this.span = this.getElement() as HTMLSpanElement;
        this.finalizeElement();
    }

    public getSpan (): HTMLSpanElement {
        try {
            return this.span;
        } catch (error) {
            console.error(error);
            return document.createElement('span');
        }
    }

    // No specific attributes for span at the moment
    protected finalizeElement (): void {}
}