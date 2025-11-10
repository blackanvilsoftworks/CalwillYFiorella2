import { iBaseElement } from "./iBaseElement.js";

export interface iButtonElement extends iBaseElement {
    type?: "submit" | "reset" | "button";
}