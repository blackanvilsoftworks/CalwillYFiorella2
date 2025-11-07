import { iButtonElement } from "../../interfaces/elements/iButtonElement";

export class ButtonElement {
    private button: HTMLButtonElement;

    constructor ({id, className, type, text}: iButtonElement) {
        this.button = document.createElement('button')
        this.button.id = id ?? '';
        this.button.className = className ?? '';
        this.button.type = type ?? 'button';
        // this.button.innerHTML = text ?? '';
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

    public addFirstChild (element: HTMLElement): void {
        this.button.prepend(element);
    }

    public addLastChild (element: HTMLElement): void {
        this.button.appendChild(element);
    }
}