import { IconElement } from "../components/elements/Icon.js";
import { SpanElement } from "../components/elements/Span.js";

export const createTitle = (title: string, icon: string): HTMLSpanElement => {
    const titleSpan     = new SpanElement({ className: 'title', text: `${title} ` });

    const iconElement   = new IconElement({ className: icon });

    titleSpan.addLastChild([iconElement.getIcon()]);
    
    return titleSpan.getSpan();
};
