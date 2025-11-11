import { iBaseElement } from "../../interfaces/elements/iBaseElement.js";
import { ButtonElement } from "./Button.js";

export class BaseElements {
    private element: HTMLElement;

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
            default:
                this.element = document.createElement('div');
        }

        if (id)         this.element.id          = id;
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
                                            
        if (text) this.element.appendChild(document.createTextNode(text));
    }

    protected getElement () { return this.element }

    public addFirstChild (e: HTMLElement | string): void {
        if (typeof e === 'string') {
            this.element.prepend(document.createTextNode(e));
        } else {
            this.element.prepend(e);
        }
    }

    public addLastChild (e: HTMLElement | string): void {
        if (typeof e === 'string') {
            this.element.appendChild(document.createTextNode(e));
        } else {
            this.element.appendChild(e);
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


img
src - URL de la imagen

alt - Texto alternativo (OBLIGATORIO)

width / height - Dimensiones

loading="lazy|eager" - Carga diferida

srcset - Imágenes responsive

sizes - Tamaños para responsive

crossorigin - Control CORS






p
align - Alineación (obsoleto)

dir="ltr|rtl" - Dirección del texto



h
align - Alineación (obsoleto)

dir - Dirección del texto



*/