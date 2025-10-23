export const createTitle = (title: string, icon: string): HTMLSpanElement => {
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
