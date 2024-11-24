document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");

    // Открытие модального окна при нажатии на футер
    footer.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Закрытие модального окна при нажатии на кнопку "x"
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне области контента
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});