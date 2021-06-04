import DOM from "./DOM.js";
import project from "./project";

const UI = (function () {
  function toggleHide(component) {
    component.classList.toggle("hidden");
  }

  return {
      toggleHide,
  }
})();

export default UI;
