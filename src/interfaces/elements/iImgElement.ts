import { iBaseElement } from "./iBaseElement.js";

export interface iImgElement extends iBaseElement {
    src: string;
    alt: string;

    width?      : number;
    height?     : number;
    loading?    : 'lazy' | 'eager';
    srcset?     : string;
    sizes?      : string;
    crossorigin?: string;
}