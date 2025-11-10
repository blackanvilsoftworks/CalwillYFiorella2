import { iButtonElement } from "../../interfaces/elements/iButtonElement";

export class ButtonElement {
    private button: HTMLButtonElement;

    constructor ({
            id, 
            className, 
            type, 
            text,
            dataBsAttributes,
            aria_controls,
            aria_expanded,
            aria_label,
            aria_selected
        }: iButtonElement) {
        this.button             = document.createElement('button')
        
        if (id)         this.button.id          = id;
        if (className)  this.button.className   = className;
        this.button.type = type ?? 'button';

        if (dataBsAttributes) {
            dataBsAttributes.forEach(attr => {
                if (attr.toggle)    this.button.dataset.bsToggle    = attr.toggle;
                if (attr.target)    this.button.dataset.bsTarget    = attr.target;
                if (attr.slide)     this.button.dataset.bsSlide     = attr.slide;
            });
        }

        this.button.setAttribute('aria-controls' , aria_controls    ?? '');
        this.button.setAttribute('aria-expanded' , aria_expanded    ?? '');
        this.button.setAttribute('aria-label'    , aria_label       ?? '');
        this.button.setAttribute('aria-selected' , aria_selected    ?? '');
        
        this.button.appendChild(document.createTextNode(text ?? ''));
    }

    public getButton (): HTMLButtonElement {
        try {
            return this.button;
        } catch (error) {
            console.error(error);
            return document.createElement('button');
        }
    }

    public addFirstChild (element: HTMLElement | string): void {
        if (typeof element === 'string') {
            this.button.prepend(document.createTextNode(element));
        } else {
            this.button.prepend(element);
        }
    }

    public addLastChild (element: HTMLElement | string): void {
        if (typeof element === 'string') {
            this.button.appendChild(document.createTextNode(element));
        } else {
            this.button.appendChild(element);
        }
    }
}