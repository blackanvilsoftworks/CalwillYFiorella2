import { arrSocialMedia } from './arrays.js';
export const facebookBtnHandler = () => {
    const facebookItem = arrSocialMedia.find(item => item.name === 'facebook');
    facebookItem ?
        window.open(facebookItem.url, '_blank') :
        alert('Facebook URL not found');
};
export const whatsappBtnHandler = () => {
    const whatsappItem = arrSocialMedia.find(item => item.name === 'whatsapp');
    if (!whatsappItem) {
        alert('WhatsApp URL not found');
        return;
    }
    const whatsappName = "NOMBRE_AQUI";
    const whatsappMessage = "MENSAJE_AQUI";
    const whatsappURL = `${whatsappItem.url}?text=Hola,%20mi%20nombre%20es%20${encodeURIComponent(whatsappName)}.%20Quería%20consultar%20por%20${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
};
//# sourceMappingURL=eventListeners.js.map