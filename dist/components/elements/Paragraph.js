import { BaseElements } from "./Base.js";
export class ParagraphElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, dir }) {
        super('p', { id, className, text, dataBsAttributes, ariaAttributes });
        this.dir = dir;
        this.paragraph = this.getElement();
        this.finalizeElement();
    }
    getParagraph() {
        try {
            return this.paragraph;
        }
        catch (error) {
            console.error(error);
            return document.createElement('p');
        }
    }
    finalizeElement() {
        if (this.dir)
            this.paragraph.dir = this.dir;
    }
}
//# sourceMappingURL=Paragraph.js.map