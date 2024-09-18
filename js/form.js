const form = document.querySelector(".form");
const fileInput = document.querySelector("#formImage");
const formPreview = document.querySelector("#formPreview");

form.addEventListener("submit", onSubmitClick);
fileInput.addEventListener("change", handleFileUpload);

let inputValue = {};
let uploadedImageBase64 = ""; // Змінна для збереження Base64 зображення

async function onSubmitClick(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  const usernameValue = formElements.username.value;
  const emailValue = formElements.email.value;
  const passwordValue = formElements.password.value;
  const feedbackValue = formElements.feedback.value;
  const ageValue = formElements.age.value;
  const datePickValue = formElements.datePick.value;
  const timePickValue = formElements.timePick.value;
  const selectMonthValue = formElements.month.value;
  const selectedCheckboxes = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  let selectedLanguages = [];
  selectedCheckboxes.forEach((checkbox) => {
    selectedLanguages.push(checkbox.value);
  });
  const selectedRadioColor = document.querySelector(
    'input[name="color"]:checked'
  ).value;

  form.reset();
  formPreview.innerHTML = ""; // Очищуємо попередній перегляд

  inputValue = {
    username: usernameValue,
    email: emailValue,
    password: passwordValue,
    feedback: feedbackValue,
    age: ageValue,
    date: datePickValue,
    time: timePickValue,
    month: selectMonthValue,
    favouriteLanguages: selectedLanguages,
    favColor: selectedRadioColor,
    uploadedImage: uploadedImageBase64, // Додаємо зображення в Base64
  };

  console.log(inputValue);
}

// Функція для обробки завантаження файлу і відображення прев'ю
function handleFileUpload() {
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      imgElement.alt = "Preview Image";
      imgElement.style.maxWidth = "200px";
      imgElement.style.maxHeight = "200px";

      formPreview.innerHTML = ""; // Очищуємо попереднє зображення
      formPreview.appendChild(imgElement); // Додаємо нове зображення в прев'ю

      // Зберігаємо Base64 зображення
      uploadedImageBase64 = e.target.result;
    };

    reader.readAsDataURL(file);
  } else {
    formPreview.innerHTML = "No file selected"; // Якщо файл не вибрано
    uploadedImageBase64 = ""; // Якщо файл не вибрано, очищаємо значення
  }
}
