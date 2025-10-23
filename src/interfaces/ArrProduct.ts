import { ProductCard } from "./ProductCard.js";

export interface ArrProduct {
    id      : string,
    title   : string,
    cards   : ProductCard[]
}