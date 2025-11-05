import { Home } from './pages/Home.js';

// ===== EVENT LISTENERS =====
import {
    facebookBtnHandler,
    whatsappBtnHandler,
    formHandler
} from './utils/eventListeners.js';

// ===== VALIDACIONES =====
// import { 
//     nameValidation, 
//     phoneNumberValidation, 
//     messageValidation 
// } from './utils/validations.js';

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
contacForm      .addEventListener('submit'  , (e: Event) => formHandler(e, inputName, inputPhoneNumber, inputMessage));


// // Importar con extensión .js
// import { Home } from './pages/Home.js';
// import { Navbar } from './components/navbar/Navbar.js';

// class App {
//   private navbar: Navbar;
//   private home: Home;

//   constructor() {
//     this.navbar = new Navbar();
//     this.home = new Home();
//     this.init();
//   }

//   private init(): void {
//     this.renderNavbar();
//     this.renderHome();
//   }

//   private renderNavbar(): void {
//     const header = document.createElement('header');
//     document.body.prepend(header);
//     this.navbar.render(header);
//   }

//   private renderHome(): void {
//     const main = document.createElement('main');
//     document.body.appendChild(main);
//     main.appendChild(this.home.render());
//   }
// }

// // Inicializar cuando el DOM esté listo
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', () => new App());
// } else {
//   new App();
// }