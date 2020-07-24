const node = (name: string) => {
  const element = document.createElement("div");
  element.innerHTML = `Hi ${name}, this is Webpack with HMR`;
  return element;
};
document.body.appendChild(node("Sajeev"));
