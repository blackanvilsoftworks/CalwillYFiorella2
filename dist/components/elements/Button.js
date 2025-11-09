export class ButtonElement {
    constructor({ id, className, type, text, data_bs_toggle, data_bs_target, data_bs_slide, aria_controls, aria_expanded, aria_label, aria_selected }) {
        this.button = document.createElement('button');
        this.button.id = id !== null && id !== void 0 ? id : '';
        this.button.className = className !== null && className !== void 0 ? className : '';
        this.button.type = type !== null && type !== void 0 ? type : 'button';
        this.button.dataset.bsToggle = data_bs_toggle !== null && data_bs_toggle !== void 0 ? data_bs_toggle : '';
        this.button.dataset.bsTarget = data_bs_target !== null && data_bs_target !== void 0 ? data_bs_target : '';
        this.button.dataset.bsSlide = data_bs_slide !== null && data_bs_slide !== void 0 ? data_bs_slide : '';
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