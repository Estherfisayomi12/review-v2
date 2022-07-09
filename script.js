const url = "https://api.cloudinary.com/v1_1/Estherfisayomi12/auto/upload";
const form = document.querySelector("#fileUpload");
// console.log(form);

form.onchange = async (e) => {
  const files = e.target.files;
  console.log(files);

  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", "bc04kr0f");

    const response = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    document.getElementById("fileUrl").setAttribute("value", response.data.url);
  }
};

/*const url = "https://api.cloudinary.com/v1_1/Estherfisayomi12/auto/upload";
const form = document.querySelector("#signup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    // Add your Upload preset here
    formData.append("upload_preset", "bc04kr0f");

    const response = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(response.data.url);

    document
      .getElementById("viewSubmission")
      .setAttribute("href", response.data.url);
  }
});

//FORM VALIDATION

const emailEl = document.querySelector("#email");
const coverLetterEl = document.querySelector("#cover-letter");
const allegianceEl = document.querySelector("#allegiance");

const Form = document.querySelector("form");

const checkEmail = () => {
  let valid = false;
  const min = 3,
    max = 25;

  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank");
  } else if (!isbetween(email.length, min, max)) {
    showError(emailEl, `Email must be between ${min} and ${max} characters.`);
  } else if (!isEmaiLValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }

  return valid;
};

const checkCoverLetter = () => {
  let valid = false;
  const min = 100,
    max = 250;

  const coverLetter = coverLetterEl.value.trim();

  if (!isRequired(coverLetter)) {
    showError(coverLetterEl, "Cover Letter cannot be blank");
  } else if (!isbetween(coverLetter.length, min, max)) {
    showError(
      coverLetterEl,
      `Cover Letter must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(coverLetterEl);
    valid = true;
  }

  return valid;
};

function fileValidation() {
  const fileInput = document.getElementById("file");

  const filePath = fileInput.value;

  // Allowing file type
  const allowedExtensions =
    /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;

  if (!allowedExtensions.exec(filePath)) {
    document.querySelector(".file-upload").classList.add("error");
    document.querySelector(".file-upload").textContent =
      "Acceptable file types: pdf, doc, docx";
    fileInput.value = "";
    return false;
  } else {
    document.querySelector(".file-upload").classList.remove("error");
    document.querySelector(".file-upload").textContent = fileInput.value;
  }
}

// const checkAllegiance = () => {
//   let valid = false;

//   const allegiance = allegianceEl.value.trim();

//   if (isRequired(allegiance)) {
//     showError(allegianceEl), "Please click the button";
//   } else {
//     showSuccess(allegianceEl);
//     valid = true;
//   }

//   return valid;
// };

const isEmaiLValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

const isRequired = (value) => (value === "" ? false : true);
const isbetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  //get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  //get the form-field element
  const formField = input.parentElement;

  //remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  //hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

Form.addEventListener("submit", function (e) {
  //prevent the form from submitting

  e.preventDefault();

  //validate fields
  let isEmailValid = checkEmail(),
    isCoverLetterValid = checkCoverLetter();
  //isAllegianceValid = checkAllegiance();

  let isFormValid = isEmaiLValid && isCoverLetterValid;
  //&& isAllegianceValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "email":
        checkEmail();
        break;
      case "coverLetter":
        checkCoverLetter();
        break;
      //case "allegiance":
      //checkAllegiance();
      //break;
    }
  })
);
*/
