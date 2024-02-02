const parseDOM = (html: any) => {
  const dom: Element = document.createElement("div");
  if (dom) {
    dom.innerHTML = html;
  } else {
    throw new Error("Could not create DOM");
  }
  return dom;
};

export default parseDOM;
