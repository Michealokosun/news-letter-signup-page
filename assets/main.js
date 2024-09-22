const form = document.getElementById("form");
const emailerror = document.getElementById("emailerror");
const modalcontainer = document.getElementById("modalcontainer");
const placeolder = document.getElementById("placeolder");
const modalbutton = document.getElementById("modalbutton");
const useremail = document.getElementById("useremail");
const email = document.getElementById("email");
const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function handlesumit(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form);
  console.log(data);
  if (data.Email === "") {
    emailerror.innerText = "Email cannot be empty";
    email.style.border = "1px solid red";
    placeolder.style.color = "red";
  } else if (emailregex.test(data.Email) === false) {
    emailerror.innerText = "invalid email";
    email.style.border = "1px solid red";
    placeolder.style.color = " red";
  } else {
    emailerror.innerText = "";
    useremail.innerText = data.Email;
    modalcontainer.classList.add("closemodal");
  }
}

form.addEventListener("submit", handlesumit);

modalbutton.addEventListener("click", () => {
  modalcontainer.classList.remove("closemodal");
  form.reset();
});
