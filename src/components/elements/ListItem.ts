import { BaseElements }     from "./Base.js";
import { iListItemElement } from "../../interfaces/elements/iListItemElement.js";

export class ListItemElement extends BaseElements{
    private li      : HTMLLIElement;
    private value   : number | undefined;

    constructor ({  
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            value
        }: iListItemElement) {
        super('li', {id, className, text, dataBsAttributes, ariaAttributes});

        this.value  = value;

        this.li     = this.getElement() as HTMLLIElement;
        this.finalizeElement();
    }

    public getListItem (): HTMLLIElement {
        try {
            return this.li;
        } catch (error) {
            console.error(error);
            return document.createElement('li');
        }
    }

    protected finalizeElement (): void {
        if (this.value !== undefined) this.li.value = this.value;
    }
}