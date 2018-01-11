var repo, x, y, active;;
var listenersArr = [];
var onPanel = true;

const cn = () => document.getElementById('active-ct');

const screen = () => document.getElementById('on-screen');

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
  const coreHtmlId = getCoreElements().find(e => e.el.getUniqName() === virt.el.getUniqName()).id;
  const coreHtml = document.getElementById(coreHtmlId);

  const width = html.scrollWidth / 2;
  const height = html.scrollHeight / 2;

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

const start = (event, html, virt) => {
  document.addEventListener('touchmove', disableTouchMouse);

  const parent = html.parentElement;
  const onScreen = (parent.id === 'on-screen') ? true : false;
  const coreHtmlId = getCoreElements().find(e => e.el.getUniqName() === virt.el.getUniqName()).id;
  const coreHtml = document.getElementById(coreHtmlId);


  if ((coreHtml.getAttribute('data-blocked') === 'true') && !onScreen) {
    return;
  }

  const clone = html.cloneNode();

  x = event.touches[0].pageX;
  y = event.touches[0].pageY;
  const width = html.scrollWidth / 2;
  const height = html.scrollHeight / 2;

  if (onScreen) {
    html.id = 'remove';
    html.setAttribute('style', 'display: none');

    clone.removeAttribute('style');
    repo.deleteElement(virt.id);
    listenersArr = listenersArr.filter(el => el !== virt.id);
    cn().setAttribute('style', `position: absolute; top: ${y - height}px; left: ${x - width}px`);

  } else {
    cn().setAttribute('style', `position: absolute; top: ${y - height}px; left: ${x - width}px`);
  }

  const activated = document.getElementById('activated');
  if(activated) activated.remove();

  clone.id = 'activated';

  active = { html: clone, virt: virt };
  cn().appendChild(clone);
}

const listen = (cancel?:boolean) => {
  if(!repo) return;
  const elements = updateRepo();

  elements.forEach(virtElem => {
    const id = virtElem.id;
    const htmlElem = document.getElementById(id);
    const listnerOnStart = (ev) => start(ev, htmlElem, virtElem);

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

const reset = () => {
  listenersArr = [];
  const elementsOnScreen = Array.from(screen().children);
  elementsOnScreen.forEach(n => n.remove());

  setTimeout(listen, 0);
}

const beginGame = (repository) => {
  repo = repository;
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

export { endGame, beginGame, reset as resetGame };
