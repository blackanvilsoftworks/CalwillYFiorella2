export class BaseElements {
    constructor(element, // e.g., 'div', 'span', 'a', etc.
    { id, className, text, dataBsAttributes, ariaAttributes }) {
        this.element = document.createElement(element);
        this.id = id;
        this.className = className;
        this.text = text;
        this.dataBsAttributes = dataBsAttributes;
        this.ariaAttributes = ariaAttributes;
        this.setAttributes();
    }
    getElement() { return this.element; }
    getID() { return this.id; }
    addFirstChild(e, t) {
        if (typeof e === 'string') {
            if (t) {
                this.element.innerHTML = e;
            }
            else {
                this.element.prepend(e);
            }
        }
        else {
            this.element.prepend(...e);
        }
    }
    addLastChild(e, t) {
        if (typeof e === 'string') {
            if (t) {
                this.element.innerHTML = e;
            }
            else {
                this.element.append(e);
            }
        }
        else {
            this.element.append(...e);
        }
    }
    setAttributes() {
        if (this.id)
            this.element.id = this.id;
        if (this.className)
            this.element.className = this.className;
        if (this.dataBsAttributes) {
            this.dataBsAttributes.forEach(attr => {
                if (attr.toggle)
                    this.element.dataset.bsToggle = attr.toggle;
                if (attr.target)
                    this.element.dataset.bsTarget = attr.target;
                if (attr.slide)
                    this.element.dataset.bsSlide = attr.slide;
            });
        }
        if (this.ariaAttributes) {
            this.ariaAttributes.forEach(attr => {
                if (attr.label)
                    this.element.setAttribute('aria-controls', attr.controls);
                if (attr.controls)
                    this.element.setAttribute('aria-expanded', attr.expanded);
                if (attr.expanded)
                    this.element.setAttribute('aria-label', attr.label);
                if (attr.selected)
                    this.element.setAttribute('aria-selected', attr.selected);
            });
        }
        if (this.text)
            this.element.append(this.text);
    }
}
/*
otros atributos

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







*/ 
//# sourceMappingURL=Base.js.map