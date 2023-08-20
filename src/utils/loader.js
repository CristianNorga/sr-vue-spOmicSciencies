import htmlText from './htmlText.json' assert { type: 'json' };
let instance = null;

class Loader {
  componentsLoaded;
  phaseLoader = 0;
  loaderCtn;
  loaderStyle;

  constructor() {
    if (!instance) {
      instance = this;
      this.componentsLoaded = false;
    }
    return instance;
  }

  loadComponents() {
    // Crear el estilo
    this.loaderStyle = document.createElement('style');
    this.loaderStyle.id = 'styleInit';
    this.loaderStyle.textContent = htmlText.loader.stylesLoader;

     // Agregar el estilo y el div al DOM
    document.head.appendChild(this.loaderStyle);

    // Crear el div con id "loader"
    this.loaderCtn = document.createElement('div');
    this.loaderCtn.id = 'loader';
    this.loaderCtn.className = 'loader1';
    this.loaderCtn.setAttribute('show', 'true');
    
    document.body.insertBefore(this.loaderCtn, document.getElementById('app'));
    this.componentsLoaded = true;
  }
  manageLoader() {
    if (!this.componentsLoaded) return;

    switch (this.phaseLoader) {
    case 0:
      
      this.loaderCtn.innerHTML = htmlText.loader.contentMain;

      setTimeout(() => {
      this.loaderCtn.setAttribute('status', 'init');
      this.loaderCtn.setAttribute('status', 'active');
      }, 10);

      this.phaseLoader += 1;
      break;

    case 1:
      this.loaderCtn.style.top = '-100%';
      this.phaseLoader += 1;
      break;
    case 2:
      this.loaderCtn.setAttribute('show', false);
      this.loaderCtn.style.top = '0';
      this.phaseLoader = 0;
      break;
    default:
      break;
    }
  }
  finishLoad() {
    this.manageLoader();
    setTimeout(() => {
    this.manageLoader();
    if (this.componentsLoaded)
      this.loaderCtn.remove();
      this.loaderStyle.remove();
    }, 1000);
  }
}

export default new Loader();
