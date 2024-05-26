document.addEventListener("DOMContentLoaded", function () {
    const noLinkButton = document.querySelector(".three-dots-icon");

    noLinkButton.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
  });