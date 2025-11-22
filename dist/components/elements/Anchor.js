import { BaseElements } from "./Base.js";
export class AnchorElement extends BaseElements {
    constructor({ id, className, text, dataBsAttributes, ariaAttributes, href, target, rel, download, hreflang, type }) {
        super('a', { id, className, text, dataBsAttributes, ariaAttributes });
        this.href = href;
        this.target = target;
        this.rel = rel;
        this.download = download;
        this.hreflang = hreflang;
        this.type = type;
        this.anchor = this.getElement();
        this.finalizeElement();
    }
    getAnchor() {
        try {
            return this.anchor;
        }
        catch (error) {
            console.error(error);
            return document.createElement('a');
        }
    }
    finalizeElement() {
        this.anchor.href = this.href;
        if (this.target)
            this.anchor.target = this.target;
        if (this.rel)
            this.anchor.rel = this.rel;
        if (this.download)
            this.anchor.download = this.download;
        if (this.hreflang)
            this.anchor.hreflang = this.hreflang;
        if (this.type)
            this.anchor.type = this.type;
    }
}
//# sourceMappingURL=Anchor.js.map