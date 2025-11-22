import { IconElement } from "../components/elements/Icon";
import { SpanElement } from "../components/elements/Span";
export const createTitle = (title, icon) => {
    const titleSpan = new SpanElement({ className: 'title', text: `${title} ` });
    const iconElement = new IconElement({ className: icon });
    titleSpan.addLastChild([iconElement.getIcon()]);
    return titleSpan.getSpan();
};
//# sourceMappingURL=createTitle.js.map