export class ButtonElement {
    constructor({ id, className, type, text, dataBsAttributes, ariaAttributes }) {
        this.button = document.createElement('button');
        this.button.type = type !== null && type !== void 0 ? type : 'button';
        if (id)
            this.button.id = id;
        if (className)
            this.button.className = className;
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
        if (ariaAttributes) {
            ariaAttributes.forEach(attr => {
                if (attr.label)
                    this.button.setAttribute('aria-controls', attr.controls);
                if (attr.controls)
                    this.button.setAttribute('aria-expanded', attr.expanded);
                if (attr.expanded)
                    this.button.setAttribute('aria-label', attr.label);
                if (attr.selected)
                    this.button.setAttribute('aria-selected', attr.selected);
            });
        }
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