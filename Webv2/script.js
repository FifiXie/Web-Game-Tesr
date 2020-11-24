window.addEventListener("load", init);
window.addEventListener("resize", init);

function init() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(el => {
    // get number of child img of this card excluding the first img
    const numOfChildImages = el.querySelectorAll("img:not(:first-of-type)").length;
    if (numOfChildImages > 0) {
      // get card's width
      const { width } = el.getBoundingClientRect();
      // create ranges
      const parts = width / numOfChildImages;
      el.addEventListener("mousemove", e => {
        // get mouse X position
        const xPos = e.pageX - el.offsetLeft;
        // remove is-visible class from img
        removeIsVisibleClass();
        // check which img to show
        switch (numOfChildImages) {
          case 1:
            if (xPos > 0 && xPos <= parts) {
              addClass(el, "img:nth-child(2)");
            }
            break;
          case 2:
            if (xPos > 0 && xPos <= parts) {
              addClass(el, "img:nth-child(2)");
            } else if (xPos > parts && xPos <= parts * 2) {
              addClass(el, "img:nth-child(3)");
            }
            break;
          case 3:
            if (xPos > 0 && xPos <= parts) {
              addClass(el, "img:nth-child(2)");
            } else if (xPos > parts && xPos <= parts * 2) {
              addClass(el, "img:nth-child(3)");
            } else if (xPos > parts * 2 && xPos <= parts * 3) {
              addClass(el, "img:nth-child(4)");
            }
            break;
          case 4:
            if (xPos > 0 && xPos <= parts) {
              addClass(el, "img:nth-child(2)");
            } else if (xPos > parts && xPos <= parts * 2) {
              addClass(el, "img:nth-child(3)");
            } else if (xPos > parts * 2 && xPos <= parts * 3) {
              addClass(el, "img:nth-child(4)");
            } else if (xPos > parts * 3 && xPos <= parts * 4) {
              addClass(el, "img:nth-child(5)");
            }
            break;

          // more cases here

          // you may want to have a default statement also
          // default:
          // something here
        }
      });
    }

    el.addEventListener("mouseleave", () => {
      removeIsVisibleClass();
    });
  });
}

function addClass(parent, child, className = "is-visible") {
  parent.querySelector(child).classList.add(className);
}

function removeIsVisibleClass() {
  if (document.querySelector("img.is-visible")) {
    document.querySelector("img.is-visible").classList.remove("is-visible");
  }
}
