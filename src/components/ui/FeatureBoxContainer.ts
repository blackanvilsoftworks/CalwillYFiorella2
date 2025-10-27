import {  Container } from '../Container.js';

export class FeatureBoxContainer extends Container {
    constructor (icon: string, title: string, description: string) {
        super('feature_box_container', 'col-12 col-md-4 mb-4 px-3');
        this.createHTML(icon, title, description);
    }

    private createHTML (icon: string, title: string, description: string): void {
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