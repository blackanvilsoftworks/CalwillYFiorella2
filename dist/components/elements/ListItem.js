import { BaseElements } from "./Base.js";
export class ListItemElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, value, role }) {
        super('li', { id, className, text, dataBsAttributes, ariaAttributes });
        this.value = value;
        this.role = role;
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
        if (this.role)
            this.li.role = this.role;
    }
}
//# sourceMappingURL=ListItem.js.map