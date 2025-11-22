import { BaseElements }     from "./Base.js";
import { iAnchorElement }   from "../../interfaces/elements/iAnchorElement.js";

export class AnchorElement extends BaseElements{
    private anchor  : HTMLAnchorElement;
    private href    : string;
    private target  : string | undefined;
    private rel     : string | undefined;
    private download: string | undefined;
    private hreflang: string | undefined;
    private type    : string | undefined;

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            href,
            target,
            rel,
            download,
            hreflang,
            type
        }: iAnchorElement) {
        super('a', {id, className, text, dataBsAttributes, ariaAttributes});

        this.href       = href;
        this.target     = target;
        this.rel        = rel;
        this.download   = download;
        this.hreflang   = hreflang;
        this.type       = type;

        this.anchor  = this.getElement() as HTMLAnchorElement;
        this.finalizeElement();
    }

    public getAnchor (): HTMLAnchorElement {
        try {
            return this.anchor;
        } catch (error) {
            console.error(error);
            return document.createElement('a');
        }
    }

    protected finalizeElement (): void {
        this.anchor.href = this.href;
        if (this.target)    this.anchor.target      = this.target;
        if (this.rel)       this.anchor.rel         = this.rel;
        if (this.download)  this.anchor.download    = this.download;
        if (this.hreflang)  this.anchor.hreflang    = this.hreflang;
        if (this.type)      this.anchor.type        = this.type;
    }      
}