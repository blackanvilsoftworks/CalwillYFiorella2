import { iDivElement } from "../../interfaces/elements/iDivElement.js";
import { BaseElements } from "./Base.js";

export class DivElement extends BaseElements{
    private div: HTMLDivElement;

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            contenteditable,
            spellcheck
        }: iDivElement) {
        super('div', {id, className, text, dataBsAttributes, ariaAttributes});
        
        this.div                    = this.getElement() as HTMLDivElement;
        
        this.div.contentEditable    = contenteditable   ?? 'false';
        this.div.spellcheck         = spellcheck        ?? false;
    }

    public getButton (): HTMLDivElement {
        try {
            return this.div;
        } catch (error) {
            console.error(error);
            return document.createElement('div');
        }
    }
}