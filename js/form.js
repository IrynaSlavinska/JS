const form = document.querySelector(".form");

form.addEventListener("submit", onSubmitClick);

let inputValue = {};

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
  };

  console.log(inputValue);
}
