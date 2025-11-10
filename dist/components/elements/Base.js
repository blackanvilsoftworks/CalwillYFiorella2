export class BaseElements {
    constructor(element, { id, className, text, dataBsAttributes, ariaAttributes }) {
        switch (element) {
            case 'button':
                this.element = document.createElement('button');
            default:
                this.element = document.createElement('div');
        }
        if (id)
            this.element.id = id;
        if (className)
            this.element.className = className;
        if (dataBsAttributes) {
            dataBsAttributes.forEach(attr => {
                if (attr.toggle)
                    this.element.dataset.bsToggle = attr.toggle;
                if (attr.target)
                    this.element.dataset.bsTarget = attr.target;
                if (attr.slide)
                    this.element.dataset.bsSlide = attr.slide;
            });
        }
        if (ariaAttributes) {
            ariaAttributes.forEach(attr => {
                if (attr.label)
                    this.element.setAttribute('aria-controls', attr.controls);
                if (attr.controls)
                    this.element.setAttribute('aria-expanded', attr.expanded);
                if (attr.expanded)
                    this.element.setAttribute('aria-label', attr.label);
                if (attr.selected)
                    this.element.setAttribute('aria-selected', attr.selected);
            });
        }
        if (text)
            this.element.appendChild(document.createTextNode(text));
    }
    getElement() { return this.element; }
}
//# sourceMappingURL=Base.js.map