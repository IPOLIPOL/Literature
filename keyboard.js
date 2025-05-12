document.addEventListener("keydown", function (e) {
  const ids = ["img-popup-1", "img-popup-2", "img-popup-3", "img-popup-4"];
  const current = location.hash.replace("#", "");
  const index = ids.indexOf(current);

  if (index !== -1) {
    if (e.key === "ArrowRight") {
      const next = ids[(index + 1) % ids.length];
      location.hash = `#${next}`;
    } else if (e.key === "ArrowLeft") {
      const prev = ids[(index - 1 + ids.length) % ids.length];
      location.hash = `#${prev}`;
    } else if (e.key === "Escape") {
      location.hash = ""; // clears the fragment, hides popup
    }
  }
});
