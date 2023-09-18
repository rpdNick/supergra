let addFileBtn = document.querySelectorAll(".attach_file");

addFileBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    flileActions(this);
  });
});

function flileActions(button) {
  let fileInput = button.closest(".file_item").querySelector(".attachment");
  if (fileInput.files.length == 0) {
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
    console.log(fileInput.files.item(0).size);
    if (fileInput.files.item(0).size < 2000000) {
      button.classList.add("active");
      let fileName = fileInput.files.item(0).name;
      fileInput.closest(".file_item").querySelector(".file_label").innerText =
        fileName;
    } else {
      alert("Please upload file less than 2MB.");
      return;
    }
  });
}

function removeFile(button, fileInput) {
  fileInput.value = "";
  button.classList.remove("active");
  fileInput.closest(".file_item").querySelector(".file_label").innerText =
    "Додати файл";
}
