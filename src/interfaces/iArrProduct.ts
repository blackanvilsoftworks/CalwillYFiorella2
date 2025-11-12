import { iProductCard } from "./iProductCard.js";

export interface iArrProduct {
    id      : string,
    title   : string,
    cards   : iProductCard[]
}