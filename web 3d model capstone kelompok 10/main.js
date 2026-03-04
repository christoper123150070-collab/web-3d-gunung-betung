document.getElementById("resetBtn").addEventListener("click", () => {
  camera.position.set(0, 2, 5);
  controls.update();
});