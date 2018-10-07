import { registerApplication, start } from 'single-spa';

registerApplication('home', () => import('./home/home.app.js'), (location) => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));

start();
