import loader from './loader';

loader.loadComponents();
loader.manageLoader();

const dataPage = {
  enviroment: null,
}

switch (window.location.hostname) {
  case 'seguros.comunicaciones.sura.com':
    dataPage.enviroment = 'prod';
    break;
  case 'mc.s6.exacttarget.com':
    dataPage.enviroment = 'mcd';
    break;
  default:
    dataPage.enviroment = 'dev';
    break;
}

