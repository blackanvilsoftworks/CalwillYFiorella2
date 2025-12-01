import { DivElement }           from '../elements/Div.js';
import { ImgElement }           from '../elements/Img.js';
import { SpanElement }          from '../elements/Span.js';
import { AnchorElement }        from '../elements/Anchor.js';
import { ButtonElement }        from '../elements/Button.js';
import { ListItemElement }      from '../elements/ListItem.js';
import { UnorderedListElement } from '../elements/UnorderedList.js';

import { globalInfo }           from '../../utils/constants.js';
import { arrContainers }        from '../../utils/arrays.js';
import { iArrContainer }        from '../../interfaces/iArrContainer.js';

export class Navbar {
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
            return document.createElement('nav');
        }        
    }

    private createElement (id:string, className:string): HTMLElement {
        const nav       = document.createElement('nav');
        nav.id          = id;
        nav.className   = className;
        nav.innerHTML   = this.createHTML();
        return nav;
    }
    
    private createHTML (): string {
        const div1  = new DivElement({className : 'container-fluid'});

        const a     = new AnchorElement({
            className   : 'navbar-brand',
            href        : `#${arrContainers[1]?.id}`
        });

        const img   = new ImgElement({
            className   : 'd-inline-block align-text-top me-2',
            src         : './assets/navbar-logo.png',
            alt         : `${globalInfo.name} Logo`,
            height      : 40
        });

        const span  = new SpanElement({
            className   : 'ms-2 navbar-title',
            text        : globalInfo.name.toUpperCase()
        });

        a.addLastChild([img.getImg()]);
        a.addLastChild([span.getSpan()]);
        div1.addLastChild([a.getAnchor()]);

        const button = new ButtonElement({
            className       : 'navbar-toggler border-0',
            type            : 'button',
            dataBsAttributes: [{
                toggle  : 'collapse',
                target  : '#navbarNav',
            }],
            ariaAttributes  : [{
                controls: 'navbarNav',
                expanded: 'false',
                label   : 'Toggle navigation'
            }]
        });

        const spanIcon = new SpanElement({ className   : 'navbar-toggler-icon' });
        
        button.addLastChild([spanIcon.getSpan()]);
        div1.addLastChild([button.getButton()]);

        const div2 = new DivElement({
            id          : 'navbarNav',
            className   : 'collapse navbar-collapse text-center ps-auto'
        });
        div2.addLastChild([this.createNavbarItems()]);
        div1.addLastChild([div2.getDiv()]);

        return div1.getDiv().outerHTML;
    }

    private createNavbarItems (): HTMLUListElement {
        const ul = new UnorderedListElement({
            className   : 'navbar-nav ms-auto',
        });
        
        arrContainers.map(({navbar, id}: iArrContainer) => {
            if (navbar){
                const li = new ListItemElement({
                    className: `nav-item`,
                });

                const a = new AnchorElement({
                    className   : 'nav-link',
                    href        : `#${id}`,
                    text        : navbar
                });
                
                li.addLastChild([a.getAnchor()]);
                ul.addLastChild([li.getListItem()]);
            }
        });
        return ul.getUnorderedList();
    }
}