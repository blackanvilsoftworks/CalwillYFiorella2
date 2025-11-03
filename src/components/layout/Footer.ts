import { arrSocialMedia }    from '../../utils/arrays.js';

export class Footer {
    private container: HTMLElement;

    constructor (id: string, className: string) {
        this.container = this.createElement(id, className);
    }

    public getContainer (): HTMLElement {
        try {
            if (!this.container.innerHTML) {
                throw new Error(`Element id:${this.container.id} has no innerHTML set.`);
            }
            return this.container;
        } catch (error) {
            console.error(error);
            return document.createElement('footer');
        }
    }

    private createElement (id:string, className:string): HTMLElement {
        const nav       = document.createElement('footer');
        nav.id          = id;
        nav.className   = className;
        nav.innerHTML   = this.createHTML();
        return nav;
    }
    
    private createHTML (): string {
        return `    
            <div class="container pt-0">
                <div class="row justify-content-center"> <!-- Centramos la fila -->
                    <div class="col-12 col-md-8"> <!-- Limitamos el ancho en pantallas grandes -->
                        <div class="row">
                            ${this.createSocialMediaButton()}
                        </div>                    
                        <hr>                    
                        <div class="row">
                            <div class="col-12">
                                <h5>Calwill & Fiorella</h5>
                                <p>Distribuidores de calzado infantil y calzado para adultos. Comodidad y estilo para toda la familia.</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>`;
    }

    private createSocialMediaButton () {
        return arrSocialMedia.map(media => { return `
            <div class="col-12 col-sm-6 mb-3">
                <button type="button" class="btn btn-outline-${media.color} w-100" id="btn_${media.name}">
                    <i class="${media.icon}"></i> ${media.name.charAt(0).toUpperCase() + media.name.slice(1)}
                </button>
            </div>`;
        }).join('');
    }
}