const spoilerTitles = document.querySelectorAll(".spoiler-title");

spoilerTitles.forEach((item) => {
  item.addEventListener("click", function () {
    const text = this.nextElementSibling;
    text.style.display = text.style.display === "block" ? "none" : "block";

    if (this.classList.contains("open")) {
      this.classList.remove("open");
    } else {
      this.classList.add("open");
    }
  });
});
