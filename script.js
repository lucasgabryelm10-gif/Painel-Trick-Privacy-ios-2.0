const bypassBtn = document.getElementById("bypassBtn");
const panel = document.getElementById("panel");

bypassBtn.addEventListener("click", () => {
  panel.style.opacity = "0";
  panel.style.transform = "scale(0.9)";
  setTimeout(() => {
    panel.style.display = "none";
  }, 300);
});

// FOV slider
const fov = document.getElementById("fov");
const fovValue = document.getElementById("fovValue");

fov.addEventListener("input", () => {
  fovValue.textContent = fov.value;
});
