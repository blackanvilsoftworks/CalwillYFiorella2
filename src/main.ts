import { Home } from './pages/Home.js';

const body = document.getElementById('body') as HTMLBodyElement;

body.prepend(Home());




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