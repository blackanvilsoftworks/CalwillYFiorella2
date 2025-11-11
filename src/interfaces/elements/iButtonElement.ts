import { iBaseElement } from "./iBaseElement.js";

export interface iButtonElement extends iBaseElement {
    type?: "submit" | "reset" | "button";
}

/*
ButtonElement
type="button|submit|reset"

disabled - Deshabilita el botón

form - Asocia con formulario

name - Nombre para formularios

value - Valor para formularios

formaction - URL alternativa para submit

formenctype - Tipo de encoding
*/