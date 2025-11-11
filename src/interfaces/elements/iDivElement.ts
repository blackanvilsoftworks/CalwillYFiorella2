import { iBaseElement } from "./iBaseElement.js";

export interface iDivElement extends iBaseElement {
    contenteditable?: 'true' | 'false' | 'plaintext-only';
    spellcheck?     : boolean;
}