export const createTitle = (title, icon) => {
    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.innerHTML = `
        <span class="title">
            ${title}
            <i class="${icon}"></i>
        </span>
    `;
    return titleSpan;
};
//# sourceMappingURL=createTitle.js.map