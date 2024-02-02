const cleanDOM = (dom: any) => {
  if (dom) {
    const stuff = dom.querySelectorAll("script, img, form, input, button, style");
    let i = stuff.length;
    while (i--) {
      if (stuff[i] && stuff[i].parentNode) {
        stuff[i].parentNode.removeChild(stuff[i]);
      }
    }
  } else {
    throw new Error("No DOM to clean");
  }
  return dom;
};

export default cleanDOM;
