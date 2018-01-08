import { ElementsRepository } from '../../app/model/elements.repository';

var repo, x, y, active;;
var listenersArr = [];
var onPanel = true;

const target = () => document.getElementById('container');

const cn = () => document.getElementById('active-ct');

const touchMove = (event) => {
  const screenHeight = document.getElementById('nb-target').scrollHeight;

  x = event.touches[0].pageX;
  y = event.touches[0].pageY;
  if (y < screenHeight) {
    onPanel = false
  } else {
    onPanel = true;
  };

  if (active != null) {
    const width = active.html.scrollWidth / 2;
    const height = active.html.scrollHeight / 2;

    cn().setAttribute('style', `position: absolute; top: ${y - height}px; left: ${x - width}px`);
  }
};

const disableTouchMouse = (event) => {
  event.preventDefault();
}

const screen = () => document.getElementById('on-screen');

const updateRepo = () => {
  return repo.getElements(col => col);
}

const getCoreElements = () => {
  return repo.getElements(col => col.filter(e => e.core));
}

const end = () => {
  if (!active) return;

  const forRemove = document.getElementById('remove');
  if (forRemove) forRemove.remove();

  const { html, virt } = active;
  const coreHtmlId = getCoreElements().find(e => e.el.name === virt.el.name).id;
  const coreHtml = document.getElementById(coreHtmlId);

  const width = html.scrollWidth / 2;
  const height = html.scrollHeight / 2; onPanel

  cn().removeChild(html);

  active = null;

  if (!onPanel) {
    coreHtml.setAttribute('data-blocked', 'true');
    html.setAttribute('style', `position: absolute; top: ${y - height}px; left: ${x - width}px`);
    const newId = repo.addElement(virt.el);
    html.id = newId;
    screen().appendChild(html);
  } else {
    coreHtml.setAttribute('data-blocked', 'false');
  };

  document.removeEventListener('touchmove', disableTouchMouse);

  listen();
}

const start = (html, virt) => {
  document.addEventListener('touchmove', disableTouchMouse);

  const parent = html.parentElement;
  const onScreen = (parent.id === 'on-screen') ? true : false;
  const coreHtmlId = getCoreElements().find(e => e.el.name === virt.el.name).id;
  const coreHtml = document.getElementById(coreHtmlId);


  if ((coreHtml.getAttribute('data-blocked') === 'true') && !onScreen) {
    return;
  }

  const clone = html.cloneNode();

  if (onScreen) {
    html.id = 'remove';
    html.setAttribute('style', 'display: none');

    clone.removeAttribute('style');
    repo.deleteElement(virt.id);
    listenersArr = listenersArr.filter(el => el !== virt.id);
  }

  clone.id = 'activated';

  // x = event.touches[0].pageX;
  // y = event.touches[0].pageY;

  const width = html.scrollWidth / 2;
  const height = html.scrollHeight / 2;
  cn().setAttribute('style', `position: absolute; top: ${y - height}px; left: ${x - width}px`);

  active = { html: clone, virt: virt };
  cn().appendChild(clone);
}

const listen = (cancel?:boolean) => {
  if(!repo) return;
  const elements = updateRepo();

  elements.forEach(virtElem => {

    const id = virtElem.id;
    const htmlElem = document.getElementById(id);
    const listnerOnStart = () => start(htmlElem, virtElem);

    if(cancel) {
      htmlElem.removeEventListener('touchstart', listnerOnStart);
      return;
    }

    if (!listenersArr.find(el => el === id)) {
      htmlElem.addEventListener('touchstart', listnerOnStart);
      listenersArr = [...listenersArr, id];
    }
  });
};








const beginGame = (repository) => {
  console.log('begin game');
  repo = repository;
  console.log(repo);
  document.addEventListener('touchmove', touchMove);
  document.addEventListener('touchend', end);

  listen();
}

const endGame = () => {
  listen(true);
  repo = null;
  listenersArr = [];
  document.removeEventListener('touchmove', touchMove);
  document.removeEventListener('touchend', end);
}

export { endGame, beginGame };
