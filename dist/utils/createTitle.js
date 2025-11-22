import { SpanElement } from "../components/elements/Span";
export const createTitle = (title, icon) => {
    const titleSpan = new SpanElement({ className: 'title', text: `${title} ` });
    const iconElement = document.createElement('i');
    iconElement.className = icon;
    titleSpan.addLastChild([iconElement]);
    return titleSpan.getSpan();
};
//# sourceMappingURL=createTitle.js.map