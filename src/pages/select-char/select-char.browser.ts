export default (monsters: any[]) => {
  const elements = monsters.map(m => {
    return { name: m.getName(), anchor: m.getAnchor() };
  });

  elements.forEach(e => {
    const html = document.getElementById(e.name);
    const anchor = document.getElementById(e.anchor);
    const pattern = anchor.getBoundingClientRect();

    if(!html) return;

    html.setAttribute('style', `top: ${pattern.top}px; left: ${pattern.left}px`);
  });
}
