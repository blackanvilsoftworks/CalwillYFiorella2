import { iBaseElement } from "../../interfaces/elements/iBaseElement.js";
import { tBaseChild } from "../../types/tBaseChild.js";
import { ButtonElement } from "./Button.js";

export class BaseElements {
    private element: HTMLElement;
    private id: string | undefined;

    constructor (element: string, {
            id,
            className,
            text,
            dataBsAttributes,
            ariaAttributes
        }: iBaseElement) {
        
        switch (element) {
            case 'button':
                this.element = document.createElement('button');
                break;
            default:
                this.element = document.createElement('div');
                break;
        }

        if (id) {
            this.id         = id;
            this.element.id = this.id;
        }
        if (className)  this.element.className   = className;
    
        if (dataBsAttributes) {
            dataBsAttributes.forEach(attr => {
                if (attr.toggle)    this.element.dataset.bsToggle    = attr.toggle;
                if (attr.target)    this.element.dataset.bsTarget    = attr.target;
                if (attr.slide)     this.element.dataset.bsSlide     = attr.slide;                
            });
        }
    
        if (ariaAttributes) {
            ariaAttributes.forEach(attr => {
                if (attr.label)    this.element.setAttribute('aria-controls' , attr.controls!);
                if (attr.controls) this.element.setAttribute('aria-expanded' , attr.expanded!);
                if (attr.expanded) this.element.setAttribute('aria-label'    , attr.label!);
                if (attr.selected) this.element.setAttribute('aria-selected' , attr.selected!);
            });
        }
                                            
        if (text) this.element.append(text);
    }

    protected getElement () { return this.element }

    public getID () { return this.id; }

    public addFirstChild (e: tBaseChild, t?: 'innerHTML'): void {
        if (typeof e === 'string') {
            if (t && t === 'innerHTML') {
                this.element.innerHTML = e;
            } else {
                this.element.prepend(e);
            }
        } else {
            this.element.prepend(...e);
        }
    }

    public addLastChild (e: tBaseChild, t?: 'innerHTML'): void {
        if (typeof e === 'string') {
            if (t && t === 'innerHTML') {
                this.element.innerHTML = e;
            } else {
                this.element.append(e);
            }
        } else {
            this.element.append(...e);
        }
    }
}
/*
otros atributos







input

autofocus - Foco automático

disabled - Deshabilita el botón

form - Asocia con formulario

name - Nombre para formularios

value - Valor para formularios

type="text|email|password|number|checkbox|radio|file|etc"

placeholder - Texto de ejemplo

required - Campo obligatorio

maxlength / minlength - Longitud

pattern - Expresión regular

min / max / step - Para números/fechas

multiple - Múltiples valores (archivos/email)

readonly - Solo lectura (no deshabilitado)

size - Ancho visible en caracteres

list - Asocia con <datalist>

accept - Tipos de archivo aceptados



textarea
autofocus - Foco automático

disabled - Deshabilita el botón

form - Asocia con formulario

name - Nombre para formularios

value - Valor para formularios

rows - Número de filas visibles

cols - Ancho en caracteres

wrap="hard|soft" - Cómo envolver texto

maxlength / minlength - Longitud del texto

placeholder - Texto de ejemplo

required - Campo obligatorio

readonly - Solo lectura




Anchor
href - URL de destino

target="_blank|_self|_parent|_top"

rel="noopener|noreferrer|nofollow"

download - Descarga el recurso

hreflang - Idioma del recurso

type - Tipo MIME del recurso









p
align - Alineación (obsoleto)

dir="ltr|rtl" - Dirección del texto



h
align - Alineación (obsoleto)

dir - Dirección del texto



*/