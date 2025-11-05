export const createTitle = (title: string, icon: string): HTMLSpanElement => {
    const titleSpan         = document.createElement('span');
    titleSpan.className     = 'title';
    titleSpan.textContent   = `${title} `;

    const iconElement       = document.createElement('i');
    iconElement.className   = icon;

    titleSpan.appendChild(iconElement);
    
    return titleSpan;
};
