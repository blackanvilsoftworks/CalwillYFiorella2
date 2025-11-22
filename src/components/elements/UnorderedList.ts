import { BaseElements }             from "./Base.js";
import { iUnorderedListElement }    from "../../interfaces/elements/iUnorderedListElement.js";

export class UnorderedListElement extends BaseElements{
    private ul      : HTMLUListElement;
    private style   : string | undefined;
    private role    : string | undefined;

    constructor ({  
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            style,
            role
        }: iUnorderedListElement) {
        super('ul', {id, className, text, dataBsAttributes, ariaAttributes});

        this.style  = style;
        this.role   = role;

        this.ul     = this.getElement() as HTMLUListElement;
        this.finalizeElement();
    }

    public getUnorderedList (): HTMLUListElement {
        try {
            if (!this.ul.hasChildNodes()) {
                throw new Error('The unordered list has no list items.');
            }
            return this.ul;
        } catch (error) {
            console.error(error);
            return document.createElement('ul');
        }
    }

    protected finalizeElement (): void {
        if (this.style) this.ul.style   = this.style;
        if (this.role)  this.ul.role    = this.role;
    }
}