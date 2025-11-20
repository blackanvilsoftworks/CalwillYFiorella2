import { DivElement } from "./elements/Div.js";

export class Container {
    private container: HTMLDivElement;
    
    constructor (id: string, className: string) {
        this.container = new DivElement({id, className}).getDiv();
    }
    
    public getContainer (): HTMLDivElement {
        try {
            if (!this.container.innerHTML) {
                throw new Error(`Element id:${this.container.id} has no innerHTML set.`);
            }
            return this.container;
        } catch (error) {
            console.error(error);
            return new DivElement({}).getDiv();
        }
    }

    public setHTML (html: string): void {
        this.container.innerHTML = html;
    }
}