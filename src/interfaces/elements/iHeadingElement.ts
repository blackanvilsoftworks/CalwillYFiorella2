import { iBaseElement }     from "./iBaseElement.js";
import { tHeadingElements } from "../../types/tHeadingElements.js";

export interface iHeadingElement extends iBaseElement {
    type: tHeadingElements;
}