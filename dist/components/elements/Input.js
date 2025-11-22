import { BaseElements } from "./Base.js";
export class IconElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes }) {
        super('i', { id, className, text, dataBsAttributes, ariaAttributes });
        this.i = this.getElement();
        this.finalizeElement();
    }
    getIcon() {
        try {
            return this.i;
        }
        catch (error) {
            console.error(error);
            return document.createElement('i');
        }
    }
    // No specific attributes for icon at the moment
    finalizeElement() { }
}
//# sourceMappingURL=Input.js.map