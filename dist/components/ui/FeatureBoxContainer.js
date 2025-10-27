import { Container } from '../Container.js';
export class FeatureBoxContainer extends Container {
    constructor(icon, title, description) {
        super('feature_box_container', 'col-12 col-md-4 mb-4 px-3');
        this.createHTML(icon, title, description);
    }
    createHTML(icon, title, description) {
        const html = `
            <div class="feature-box">
                <div class="feature-icon">
                    <i class="${icon}"></i>
                </div>
                <h3>${title}</h3>
                <p>${description}</p>
            </div>`;
        this.setHTML(html);
    }
}
//# sourceMappingURL=FeatureBoxContainer.js.map