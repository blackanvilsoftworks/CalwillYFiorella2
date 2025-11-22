import { SpanElement } from "../components/elements/Span";

export const createTitle = (title: string, icon: string): HTMLSpanElement => {
    const titleSpan = new SpanElement({ className: 'title', text: `${title} ` });

    const iconElement       = document.createElement('i');
    iconElement.className   = icon;

    titleSpan.addLastChild([iconElement]);
    
    return titleSpan.getSpan();
};
