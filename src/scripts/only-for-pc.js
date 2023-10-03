const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  const rustyChess = document.getElementById("rusty-chess-project");
  rustyChess.parentElement.style.display = "none";
}
