import { BaseElements } from "./Base.js";
export class ImgElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, src, alt, width, height, loading, srcset, sizes, crossorigin }) {
        super('img', { id, className, text, dataBsAttributes, ariaAttributes });
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.loading = loading;
        this.srcset = srcset;
        this.sizes = sizes;
        this.crossorigin = crossorigin;
        this.img = this.getElement();
        this.finalizeElement();
    }
    getImg() {
        try {
            return this.img;
        }
        catch (error) {
            console.error(error);
            return document.createElement('img');
        }
    }
    finalizeElement() {
        this.img.src = this.src;
        this.img.alt = this.alt;
        if (this.width)
            this.img.width = this.width;
        if (this.height)
            this.img.height = this.height;
        if (this.loading)
            this.img.loading = this.loading;
        if (this.srcset)
            this.img.srcset = this.srcset;
        if (this.sizes)
            this.img.sizes = this.sizes;
        if (this.crossorigin)
            this.img.crossOrigin = this.crossorigin;
    }
}
//# sourceMappingURL=Img.js.map