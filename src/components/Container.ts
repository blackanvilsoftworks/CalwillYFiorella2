export class Container {
    private container: HTMLDivElement;
    
    constructor (id: string, className: string) {
        this.container              = document.createElement('div');
        this.container.id           = id;
        this.container.className    = className;
    }
    
    public getContainer (): HTMLDivElement {
        try {
            if (!this.container.innerHTML) {
                throw new Error(`Element id:${this.container.id} has no innerHTML set.`);
            }
            return this.container;
        } catch (error) {
            console.error(error);
            return document.createElement('div');
        }        
    }

    public setHTML (html: string): void {
        this.container.innerHTML = html;
    }
}