document.body.className = "light";

document.querySelector(".switch").addEventListener("change", (event) => {
  document.body.className = event.target.checked ? "dark" : "light";

  const paragraph = document.querySelectorAll("div p");
  const h1 = document.querySelectorAll("h1");

  paragraph.forEach((paragraph) => {
    paragraph.className = event.target.checked ? "dark" : "light";
  });
  h1.forEach((h1) => {
    h1.className = event.target.checked ? "dark" : "light";
  });
});
