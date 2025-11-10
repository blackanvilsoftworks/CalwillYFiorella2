import { iAriaAttributes } from "./iAriaAttributes";
import { iDataBsAttributes } from "./iDataBsAttributes";

export interface iButtonElement {
    id?: string;
    className?: string;
    type?: "submit" | "reset" | "button";
    text?: string;
    dataBsAttributes?: iDataBsAttributes[];
    ariaAttributes?: iAriaAttributes[];
}