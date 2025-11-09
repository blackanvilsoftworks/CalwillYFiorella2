export interface iButtonElement {
    id?: string;
    className?: string;
    type?: "submit" | "reset" | "button";
    text?: string;
    data_bs_toggle?: string;
    data_bs_target?: string;
    aria_controls?: string;
    aria_expanded?: string;
    aria_label?: string;
}