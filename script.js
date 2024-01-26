const dropzoneBox = document.getElementsByClassName("dropzone-box") [0];
const inputFiles = document.querySelectorAll(
    ".dropzone-area [type='file']"
);

const inputElement = inputFiles[0];
const dropZoneElement = inputElement.closest(".dropzone-area");

inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
        updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
    }
});

dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("dropzone--over");
});

["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("dropzone--over");
    });
});

if (e.dataTransfer.files.length) {
    inputElement.files = e.dataTransfer.files;

    updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
}

const updateDropzoneFilesList = (dropZoneElement, file) => {
    let dropzoneFileMessage = dropZoneElement.querySelectorAll(".message");

    dropzoneFileMessage.innerHtml = `
        ${file.name}, ${file.size} bytes
    `;
};

dropzoneBox.addEventListener("reset", (e) => {
    let dropzoneFileMessage = dropZoneElement.querySelector(".message");

    dropzoneFileMessage.innerHTML = `No Files Selected`;
});

dropzoneBox.addEventListener("submit", (e) => {
    e.preventDefault();
    const myField = document.getElementById("upload-file");
    console.log(myField.files[0])
})