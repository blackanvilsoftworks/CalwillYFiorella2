import { BaseElements } from "./Base.js";
import { iIconElement } from "../../interfaces/elements/iIconElement.js";

export class IconElement extends BaseElements{
    private i: HTMLElement;

    constructor ({  
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes
        }: iIconElement) {
        super('i', {id, className, text, dataBsAttributes, ariaAttributes});

        this.i = this.getElement() as HTMLElement;
        this.finalizeElement();
    }

    public getIcon (): HTMLElement {
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