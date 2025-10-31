import { arrContainers } from '../utils/arrays.js';
import { Navbar } from '../components/layout/Navbar.js';
import { Footer } from '../components/layout/Footer.js';
import { ContactForm } from '../components/layout/ContactForm.js';
import { AboutUs } from '../components/container/AboutUs.js';
import { Hero } from '../components/container/Hero.js';
import { Feature } from '../components/container/Feature.js';
import { Shipping } from '../components/container/Shipping.js';
import { PayMethod } from '../components/container/PayMethod.js';
export function Home() {
    const container = document.createElement('div');
    container.appendChild(new Navbar(arrContainers[0].id, arrContainers[0].className).getContainer());
    container.appendChild(new Hero(arrContainers[1].id, arrContainers[1].className).getContainer());
    container.appendChild(new AboutUs(arrContainers[2].id, arrContainers[2].className, arrContainers[2].title, arrContainers[2].icon).getContainer());
    container.appendChild(new Feature(arrContainers[3].id, arrContainers[3].className, arrContainers[3].title, arrContainers[3].icon).getContainer());
    // container.appendChild(new Product(arrContainers[4]!.id, arrContainers[4]!.className, arrContainers[4]!.title, arrContainers[4]!.icon).getContainer());
    container.appendChild(new Shipping(arrContainers[5].id, arrContainers[5].className, arrContainers[5].title, arrContainers[5].icon).getContainer());
    container.appendChild(new PayMethod(arrContainers[6].id, arrContainers[6].className, arrContainers[6].title, arrContainers[6].icon).getContainer());
    container.appendChild(new ContactForm(arrContainers[7].id, arrContainers[7].className, arrContainers[7].title, arrContainers[7].icon).getContainer());
    container.appendChild(new Footer(arrContainers[8].id, arrContainers[8].className).getContainer());
    return container;
}
//# sourceMappingURL=Home.js.map