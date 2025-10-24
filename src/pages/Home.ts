import { Hero } from '../components/Hero.js';
import { Navbar } from '../components/Navbar.js';

export function Home(): HTMLElement {
    const container = document.createElement('div');

    container.appendChild(new Navbar().getElement());
    container.appendChild(new Hero().getElement());

    return container;
}