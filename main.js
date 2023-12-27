document.addEventListener("DOMContentLoaded", (event) => {
  const secret = document.querySelector("#secret");
  const sendForm = document.querySelector("#sendForm");
  const nameForm = document.querySelector("#name");
  const emailForm = document.querySelector("#email");
  const messageForm = document.querySelector("#textMessage");

  if (secret) {
    secret.addEventListener("click", function () {
      alert("It's secret! There's no need to try to find out what it is!");
    });
  }

  if (sendForm && nameForm && emailForm && messageForm) {
    sendForm.addEventListener("click", function (event) {
      event.preventDefault();
      if (nameForm.value && emailForm.value && messageForm.value) {
        alert("Submitted");
      } else {
        alert("You need to fill everything!");
      }
    });
  }
});
