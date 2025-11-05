export const createTitle = (title, icon) => {
    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.textContent = `${title} `;
    const iconElement = document.createElement('i');
    iconElement.className = icon;
    titleSpan.appendChild(iconElement);
    return titleSpan;
};
//# sourceMappingURL=createTitle.js.map