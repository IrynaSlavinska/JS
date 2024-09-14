const spoilerTitles = document.querySelectorAll(".spoiler-title");

spoilerTitles.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedElement = event.currentTarget;
    const text = clickedElement.nextElementSibling;

    text.style.display = text.style.display === "block" ? "none" : "block";

    if (clickedElement.classList.contains("open")) {
      clickedElement.classList.remove("open");
    } else {
      clickedElement.classList.add("open");
    }
  });
});

// const spoilerTitles = document.querySelectorAll(".spoiler-title");

// spoilerTitles.forEach((item) => {
//   item.addEventListener("click", function () {
//     const text = this.nextElementSibling;
//     text.style.display = text.style.display === "block" ? "none" : "block";

//     if (this.classList.contains("open")) {
//       this.classList.remove("open");
//     } else {
//       this.classList.add("open");
//     }
//   });
// });
