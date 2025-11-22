import { BaseElements } from "./Base.js";
export class ListItemElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, value }) {
        super('li', { id, className, text, dataBsAttributes, ariaAttributes });
        this.value = value;
        this.li = this.getElement();
        this.finalizeElement();
    }
    getListItem() {
        try {
            return this.li;
        }
        catch (error) {
            console.error(error);
            return document.createElement('li');
        }
    }
    finalizeElement() {
        if (this.value !== undefined)
            this.li.value = this.value;
    }
}
//# sourceMappingURL=ListItem.js.map