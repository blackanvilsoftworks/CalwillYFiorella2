import { Home } from './pages/Home.js';

// ===== EVENT LISTENERS =====
import {
    facebookBtnHandler,
    whatsappBtnHandler,
    formHandler
} from './services/events/eventHandlers.js';

// ===== MAIN =====
const body = document.getElementById('body') as HTMLBodyElement;

body.prepend(Home());

// ===== IDs CONSTANTES DEL DOM =====
const toFacebookBtn     = document.getElementById('btn_facebook')! as HTMLButtonElement;
const toWhatsappBtn     = document.getElementById('btn_whatsapp')! as HTMLButtonElement;

const contacForm        = document.getElementById('contact_form')! as HTMLFormElement;
const inputName         = document.getElementById('name')        ! as HTMLInputElement;
const inputPhoneNumber  = document.getElementById('phone-number')! as HTMLInputElement;
const inputMessage      = document.getElementById('message')     ! as HTMLTextAreaElement;

// ===== EVENT LISTENERS =====
toFacebookBtn   .addEventListener('click'   , facebookBtnHandler);
toWhatsappBtn   .addEventListener('click'   , whatsappBtnHandler);
contacForm      .addEventListener('submit'  , (e: Event) => {
    formHandler(e, contacForm, inputName, inputPhoneNumber, inputMessage);
});