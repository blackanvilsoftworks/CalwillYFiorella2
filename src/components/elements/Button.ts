import { iButtonElement } from "../../interfaces/elements/iButtonElement.js";
import { BaseElements } from "./Base.js";

export class ButtonElement extends BaseElements{
    private button: HTMLButtonElement;

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            type
        }: iButtonElement) {
        super('button', {id, className, text, dataBsAttributes, ariaAttributes});
        
        this.button         = this.getElement() as HTMLButtonElement;

        this.button.type    = type ?? 'button';
    }

    public getButton (): HTMLButtonElement {
        try {
            return this.button;
        } catch (error) {
            console.error(error);
            return document.createElement('button');
        }
    }
}

