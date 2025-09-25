document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  let url = `https://wa.me/94704198014?text=Name:%20${encodeURIComponent(name)}%0A%0AMessage:%20${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
