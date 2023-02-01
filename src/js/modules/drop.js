// dragenter
// dragleave
// dragover
// drop

import {postData} from "../services/request";

const drop = () => {
    function highlight(item) {
        item.closest(".file_upload").style.cssText = `
                        background-color: #00000021;
                        border: 2px solid #ff0000;
                        border-radius: 5px;
                        padding: 5px;
                `;
    }

    function unHighlight(item) {
        item.closest(".file_upload").style.cssText = `
                    background-color: transparent;
                    border: none;
                    border-radius: 5px;
                    padding: 0;
                `;
    }

    const upload = document.querySelectorAll("[name='upload']");

    ["dragenter", "dragleave", "dragover", "drop"].forEach(eventsDrag => {
        upload.forEach(item => {
            item.addEventListener(eventsDrag, (event) => {
                event.preventDefault();
            })
        })
    });


    ["dragenter", "dragover"].forEach(eventDragenter => {
        upload.forEach(item => {
            item.addEventListener(eventDragenter, () => highlight(item));
        })
    });

    ["dragleave", "drop"].forEach(eventDragenter => {
        upload.forEach(item => {
            item.addEventListener(eventDragenter, () => unHighlight(item));
        })
    });

    upload.forEach(input => {
        ["change", "drop"].forEach(events => {
            input.addEventListener(events, (e) => {
                if (e.type === "drop") {
                    input.files = e.dataTransfer.files;
                }

                const uploadStr = input.files[0].name.split(".");
                input.previousElementSibling.textContent = (uploadStr[0].length > 6) ?
                    `${uploadStr[0].slice(0, 6)}...${uploadStr[1]}` : uploadStr.join(".");


                const alertForm = input.previousElementSibling;

                if (!input.closest("form")) {
                    const formData = new FormData();
                    formData.append("photo", input.files[0]);
                    console.log(formData)

                    postData("assets/design.php", formData)
                        .then(elem => {
                            console.log(elem);
                            alertForm.textContent = "Данные отправлены";
                        })
                        .catch(
                            error => {
                                console.error(error);
                                alertForm.textContent = "Произошла ошибка";
                            }
                        )
                        .finally(()=> {
                            setInterval(()=> {
                                alertForm.textContent = "Файл не выбран";
                            }, 3000)
                        })
                    ;
                }
            })
        })
    })
}

export default drop;