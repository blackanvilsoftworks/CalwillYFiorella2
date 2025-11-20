import { BaseElements }     from "./Base.js";
import { iButtonElement }   from "../../interfaces/elements/iButtonElement.js";

export class ButtonElement extends BaseElements{
    private button: HTMLButtonElement;
    private type: 'button' | 'submit' | 'reset';

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            type
        }: iButtonElement) {
        super('button', {id, className, text, dataBsAttributes, ariaAttributes});
        
        this.type   = type ?? 'button';

        this.button = this.getElement() as HTMLButtonElement;

        this.finalizeElement();
    }

    protected finalizeElement (): void {
        this.button.type = this.type;
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

