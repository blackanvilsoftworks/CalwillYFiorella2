import { BaseElements }     from "./Base.js";
import { iParagraphElement }  from "../../interfaces/elements/iParagraphElement.js";

export class ParagraphElement extends BaseElements{
    private paragraph   : HTMLParagraphElement;
    private dir         : string | undefined;

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            dir
        }: iParagraphElement) {
        super('p', {id, className, text, dataBsAttributes, ariaAttributes});

        this.dir        = dir;        
        this.paragraph  = this.getElement() as HTMLParagraphElement;
        this.finalizeElement();
    }

    public getParagraph (): HTMLParagraphElement {
        try {
            return this.paragraph;
        } catch (error) {
            console.error(error);
            return document.createElement('p');
        }
    }

    protected finalizeElement (): void {
        if (this.dir) this.paragraph.dir = this.dir;
    }      
}