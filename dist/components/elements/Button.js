export class ButtonElement {
    constructor({ id, className, type, text, dataBsAttributes, aria_controls, aria_expanded, aria_label, aria_selected }) {
        this.button = document.createElement('button');
        if (id)
            this.button.id = id;
        if (className)
            this.button.className = className;
        this.button.type = type !== null && type !== void 0 ? type : 'button';
        if (dataBsAttributes) {
            dataBsAttributes.forEach(attr => {
                if (attr.toggle)
                    this.button.dataset.bsToggle = attr.toggle;
                if (attr.target)
                    this.button.dataset.bsTarget = attr.target;
                if (attr.slide)
                    this.button.dataset.bsSlide = attr.slide;
            });
        }
        this.button.setAttribute('aria-controls', aria_controls !== null && aria_controls !== void 0 ? aria_controls : '');
        this.button.setAttribute('aria-expanded', aria_expanded !== null && aria_expanded !== void 0 ? aria_expanded : '');
        this.button.setAttribute('aria-label', aria_label !== null && aria_label !== void 0 ? aria_label : '');
        this.button.setAttribute('aria-selected', aria_selected !== null && aria_selected !== void 0 ? aria_selected : '');
        this.button.appendChild(document.createTextNode(text !== null && text !== void 0 ? text : ''));
    }
    getButton() {
        try {
            return this.button;
        }
        catch (error) {
            console.error(error);
            return document.createElement('button');
        }
    }
    addFirstChild(element) {
        if (typeof element === 'string') {
            this.button.prepend(document.createTextNode(element));
        }
        else {
            this.button.prepend(element);
        }
    }
    addLastChild(element) {
        if (typeof element === 'string') {
            this.button.appendChild(document.createTextNode(element));
        }
        else {
            this.button.appendChild(element);
        }
    }
}
//# sourceMappingURL=Button.js.map