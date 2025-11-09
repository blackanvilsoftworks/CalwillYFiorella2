import { iButtonElement } from "../../interfaces/elements/iButtonElement";

export class ButtonElement {
    private button: HTMLButtonElement;

    constructor ({
            id, 
            className, 
            type, 
            text,
            data_bs_toggle,
            data_bs_target,
            data_bs_slide,
            aria_controls,
            aria_expanded,
            aria_label,
            aria_selected
        }: iButtonElement) {
        this.button             = document.createElement('button')
        this.button.id          = id        ?? '';
        this.button.className   = className ?? '';
        this.button.type        = type      ?? 'button';

        this.button.dataset.bsToggle = data_bs_toggle   ?? '';
        this.button.dataset.bsTarget = data_bs_target   ?? '';
        this.button.dataset.bsSlide  = data_bs_slide    ?? '';
        
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