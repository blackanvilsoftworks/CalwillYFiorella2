import { BaseElements } from "./Base.js";
import { iDivElement }  from "../../interfaces/elements/iDivElement.js";

export class DivElement extends BaseElements{
    private div             : HTMLDivElement;
    private contenteditable : string    | undefined;
    private spellcheck      : boolean   | undefined;

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
        
        this.contenteditable    = contenteditable;
        this.spellcheck         = spellcheck;

        this.div = this.getElement() as HTMLDivElement;
        
        this.finalizeElement();
    }

    protected finalizeElement (): void {
        if (this.contenteditable)   this.div.contentEditable    = this.contenteditable;
        if (this.spellcheck)        this.div.spellcheck         = this.spellcheck;
    }

    public getDiv (): HTMLDivElement {
        try {
            return this.div;
        } catch (error) {
            console.error(error);
            return document.createElement('div');
        }
    }
}