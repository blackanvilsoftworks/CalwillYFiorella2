export class FeatureBoxContainer extends Container {
    constructor(icon, title, description) {
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
    createElement() {
        const featureBox = document.createElement('div');
        featureBox.className = 'feature-box';
    }
    getHTML() {
        return `
            <div class="col-12 col-md-4 mb-4 px-3">
                <div class="feature-box">
                    <div class="feature-icon">
                        <i class="${this.icon}"></i>
                    </div>
                    <h3>${this.title}</h3>
                    <p>${this.description}</p>
                </div>
            </div>
        `;
    }
}
//# sourceMappingURL=FeatureBox.js.map