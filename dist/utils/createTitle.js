export const createTitle = (title, icon) => {
    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.innerHTML = `${title} <i class="${icon}"></i>`;
    return titleSpan;
};
//# sourceMappingURL=createTitle.js.map