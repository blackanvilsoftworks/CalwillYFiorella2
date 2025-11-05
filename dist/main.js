import { Home } from './pages/Home.js';
// ===== EVENT LISTENERS =====
import { facebookBtnHandler, whatsappBtnHandler, formHandler } from './services/events/eventHandlers.js';
// ===== MAIN =====
const body = document.getElementById('body');
body.prepend(Home());
// ===== IDs CONSTANTES DEL DOM =====
const toFacebookBtn = document.getElementById('btn_facebook');
const toWhatsappBtn = document.getElementById('btn_whatsapp');
const contacForm = document.getElementById('contact_form');
const inputName = document.getElementById('name');
const inputPhoneNumber = document.getElementById('phone-number');
const inputMessage = document.getElementById('message');
// ===== EVENT LISTENERS =====
toFacebookBtn.addEventListener('click', facebookBtnHandler);
toWhatsappBtn.addEventListener('click', whatsappBtnHandler);
contacForm.addEventListener('submit', (e) => {
    formHandler(e, contacForm, inputName, inputPhoneNumber, inputMessage);
});
//# sourceMappingURL=main.js.map