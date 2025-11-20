import { iBaseElement }     from "./iBaseElement.js";

export interface iParagraphElement extends iBaseElement {
    dir?: 'ltr' | 'rtl';
}