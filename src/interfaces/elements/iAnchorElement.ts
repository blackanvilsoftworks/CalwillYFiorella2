import { iBaseElement }         from "./iBaseElement.js";
import { tAnchorRelTypes }      from "../../types/tAnchorRelTypes.js";
import { tAnchorTargetTypes }   from "../../types/tAnchorTergatTypes.js";

export interface iAnchorElement extends iBaseElement {
    href        : string;
    target?     : tAnchorTargetTypes;
    rel?        : tAnchorRelTypes;
    download?   : string;
    hreflang?   : string;
    type?       : string;
}

