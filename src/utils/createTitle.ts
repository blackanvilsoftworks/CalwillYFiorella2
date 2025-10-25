export const createTitle = (title: string, icon: string): HTMLSpanElement => {
    const titleSpan     = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.innerHTML = `${title} <i class="${icon}"></i>`;
    return titleSpan;
};
