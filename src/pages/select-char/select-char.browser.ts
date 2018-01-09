export default (monsters: any[]) => {
  const elements = monsters.map(m => {
    return { name: m.getName(), anchor: m.getAnchor() };
  });

  elements.forEach(e => {
    const html = document.getElementById(e.name);
    const pattern = (document.getElementById(e.anchor)).getBoundingClientRect();

    html.setAttribute('style', `top: ${pattern.y}px; left: ${pattern.x}px`);
  });
}
