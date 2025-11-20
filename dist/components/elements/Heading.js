import { BaseElements } from "./Base.js";
export class HeadingElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, type }) {
        super(type, { id, className, text, dataBsAttributes, ariaAttributes });
        this.type = type;
        this.heading = this.getElement();
    }
    getHeading() {
        try {
            return this.heading;
        }
        catch (error) {
            console.error(error);
            return document.createElement('h1');
        }
    }
    getType() { return this.type; }
    // No specific attributes to set for heading elements
    finalizeElement() { }
}
//# sourceMappingURL=Heading.js.map