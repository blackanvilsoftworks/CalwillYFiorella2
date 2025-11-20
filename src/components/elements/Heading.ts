import { BaseElements }     from "./Base.js";
import { iHeadingElement }  from "../../interfaces/elements/iHeadingElement.js";

export class HeadingElement extends BaseElements{
    private heading : HTMLHeadingElement;
    private type    : string;    

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            type
        }: iHeadingElement) {
        super(type, {id, className, text, dataBsAttributes, ariaAttributes});
        
        this.type    = type;
        
        this.heading = this.getElement() as HTMLHeadingElement;
    }

    public getHeading (): HTMLHeadingElement {
        try {
            return this.heading;
        } catch (error) {
            console.error(error);
            return document.createElement('h1');
        }
    }

    public getType (): string { return this.type }

    // No specific attributes to set for heading elements
    protected finalizeElement (): void {}      
}