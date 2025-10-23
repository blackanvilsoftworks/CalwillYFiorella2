import { Navbar } from '../components/navbar/Navbar.js';

export function Home(): HTMLElement {
    const container = document.createElement('div');

    container.appendChild(new Navbar().getElement());

    return container;
}