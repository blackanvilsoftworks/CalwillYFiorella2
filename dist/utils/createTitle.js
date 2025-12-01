import { IconElement } from "../components/elements/Icon.js";
import { SpanElement } from "../components/elements/Span.js";
export const createTitle = (title, icon) => {
    const titleSpan = new SpanElement({ className: 'title', text: `${title} ` });
    const iconElement = new IconElement({ className: icon });
    titleSpan.addLastChild([iconElement.getIcon()]);
    return titleSpan.getSpan();
};
//# sourceMappingURL=createTitle.js.map