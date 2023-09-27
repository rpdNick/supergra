const forms = document.querySelectorAll(".form_container form");
forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let erroreArrayElemnts = [];
    let requiredElements = form.querySelectorAll("input[data-required]");
    for (let i = 0; i < requiredElements.length; i++) {
      let elType = requiredElements[i].getAttribute("type");
      if (elType == "text" || elType == "tel") {
        if (requiredElements[i].value == "") {
          showValidationError(requiredElements[i]);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("focus", () => {
          removeValidationError(requiredElements[i]);
        });
      }

      if (elType == "email") {
        if (!validateEmail(requiredElements[i].value) || requiredElements[i].value == "") {
          showValidationError(requiredElements[i]);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("focus", () => {
          removeValidationError(requiredElements[i]);
        });
      }

      if (elType == "file") {

        if (requiredElements[i].files.length == 0) {
          showValidationError(requiredElements[i]);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("change", () => {      
          if (requiredElements[i].files.length > 0) {
            removeValidationError(requiredElements[i]);
          }
        });
      }

      if (elType == "checkbox") {
        if (!requiredElements[i].checked) {
          showValidationError(requiredElements[i]);
          erroreArrayElemnts.push(requiredElements[i]);
        }

        requiredElements[i].addEventListener("change", () => {      
          removeValidationError(requiredElements[i]);
        });
      }
    }

    if (erroreArrayElemnts.length == 0) {
      form.submit();
    }
  });
});

/** Email validation */

function validateEmail(email) {
  let expr =
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return expr.test(email);
}


function showValidationError(errorElement) {
  errorElement.closest(".form_item").classList.add("error");
}

function removeValidationError(errorElement) {
  errorElement.closest(".form_item").classList.remove("error");
}

/** File attachment logic */
let addFileBtn = document.querySelectorAll(".attach_file");

addFileBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    flileActions(this);
  });
});

function flileActions(button) {
  let fileInput = button.closest(".file_item").querySelector('input[type="file"]');
  if (fileInput.files.length === 0) {
    // Attach file
    addFile(button, fileInput);
  } else {
    // remove file
    removeFile(button, fileInput);
  }
}

function addFile(button, fileInput) {
  fileInput.click();
  fileInput.addEventListener("change", function () {
    if (fileInput.files.item(0)) {
      if (fileInput.files.item(0).size < 2000000) {
        button.classList.add("active");
        let fileName = fileInput.files.item(0).name;
        fileInput.closest(".file_item").querySelector(".file_label").innerText =
          fileName;
      } else {
        console.log("File is more than 2MB!");
        showValidationError(fileInput);
        fileInput.value = "";
      }
    }
  });
}

function removeFile(button, fileInput) {
  fileInput.value = "";
  button.classList.remove("active");
  fileInput.closest(".file_item").querySelector(".file_label").innerText =
    "Додати файл";
}
