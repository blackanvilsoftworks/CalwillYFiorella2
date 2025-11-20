import { iImgElement }  from "../../interfaces/elements/iImgElement.js";
import { BaseElements } from "./Base.js";

export class ImgElement extends BaseElements{
    private img         : HTMLImageElement;
    private src         : string;
    private alt         : string;
    private width       : number | undefined;
    private height      : number | undefined;
    private loading     : 'lazy' | 'eager' | undefined;
    private srcset      : string | undefined;
    private sizes       : string | undefined;
    private crossorigin : string | undefined;

    constructor ({
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes,
            src,
            alt,
            width,
            height,
            loading,
            srcset,
            sizes,
            crossorigin
        }: iImgElement) {
        super('img', {id, className, text, dataBsAttributes, ariaAttributes});
        
        this.src            = src;
        this.alt            = alt;
        this.width          = width;
        this.height         = height;
        this.loading        = loading;
        this.srcset         = srcset;
        this.sizes          = sizes;
        this.crossorigin    = crossorigin;

        this.img = this.getElement() as HTMLImageElement;
        this.finalizeElement();
    }

    public getImg (): HTMLImageElement {
        try {
            return this.img;
        } catch (error) {
            console.error(error);
            return document.createElement('img');
        }
    }

    private finalizeElement (): void {
        this.img.src = this.src;
        this.img.alt = this.alt;

        if (this.width)         this.img.width        = this.width;
        if (this.height)        this.img.height       = this.height;
        if (this.loading)       this.img.loading      = this.loading;
        if (this.srcset)        this.img.srcset       = this.srcset;
        if (this.sizes)         this.img.sizes        = this.sizes;
        if (this.crossorigin)   this.img.crossOrigin  = this.crossorigin;
    }
}