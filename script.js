const url = "https://api.cloudinary.com/v1_1/Estherfisayomi12/auto/upload";
const form = document.querySelector("#fileUpload");
const emailField = document.querySelector("#email");
const coverLetterField = document.querySelector("#cover-letter");
const allegianceField = document.querySelector("#allegiance");
const signupForm = document.querySelector("#signup");

const fileValidation = (file) => {
  const isValidFile =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.type === "application/pdf";

  if (!isValidFile) {
    document.querySelector("#file-error").innerHTML =
      "You can only upload JPG/PNG/Docx/PDF file!";
    return false;
  }

  const isValidSize = file.size / 1024 / 1024 < 1;

  if (!isValidSize) {
    document.querySelector("#file-error").innerHTML = "File limit is 1MB!";
    return false;
  }

  return isValidFile && isValidSize;
};

const formValidation = () => {
  if (emailField.value === "") {
    document.querySelector("#email-error").innerHTML = "Email is required";
    return false;
  } else {
    document.querySelector("#email-error").innerHTML = "";
  }

  if (coverLetterField.value === "") {
    document.querySelector("#cover-error").innerHTML =
      "Cover letter is required";
    console.log(form.files);
    return false;
  } else {
    document.querySelector("#cover-error").innerHTML = "";
  }

  if (form.files.length === 0) {
    document.querySelector("#file-error").innerHTML = "File Upload is required";
    return false;
  } else {
    document.querySelector("#file-error").innerHTML = "";
  }

  if (allegianceField.checked === false) {
    document.querySelector("#allegiance-error").innerHTML =
      "This field is required";
    return false;
  }
};

form.onchange = async (e) => {
  const files = e.target.files;

  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    const isValidFile =
      files[0].type === "image/jpeg" ||
      files[0].type === "image/png" ||
      files[0].type === "application/msword" ||
      files[0].type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      files[0].type === "application/pdf";

    const isValidSize = files[0].size / 1024 / 1024 < 1;

    if (!isValidFile) {
      form.value = "";
      document.querySelector("#file-error").innerHTML =
        "You can only upload JPG/PNG/Docx/PDF file!";
      return false;
    } else if (!isValidSize) {
      form.value = "";
      document.querySelector("#file-error").innerHTML = "File limit is 1MB!";
      return false;
    } else {
      document.querySelector("#file-error").innerHTML = "";
      let file = files[i];
      document.querySelector(".file-upload").textContent = form.value;

      formData.append("file", file);
      formData.append("upload_preset", "bc04kr0f");

      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      document
        .getElementById("fileUrl")
        .setAttribute("value", response.data.url);
    }
  }
};
