import { iAriaAttributes } from "./iAriaAttributes.js";
import { iDataBsAttributes } from "./iDataBsAttributes.js";

export interface iBaseElement {
    id?                 : string                | undefined;
    className?          : string                | undefined;
    text?               : string                | undefined;
    dataBsAttributes?   : iDataBsAttributes[]   | undefined;
    ariaAttributes?     : iAriaAttributes[]     | undefined;
}