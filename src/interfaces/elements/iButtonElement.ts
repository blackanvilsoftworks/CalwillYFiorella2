import { iDataBsAtributes } from "./iDataBsAtributes";

export interface iButtonElement {
    id?: string;
    className?: string;
    type?: "submit" | "reset" | "button";
    text?: string;
    dataBsAttributes?: iDataBsAtributes[];
    aria_controls?: string;
    aria_expanded?: string;
    aria_label?: string;
    aria_selected?: string;
}