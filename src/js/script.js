import JustValidate from "just-validate";
import "../scss/style.scss";

// menu
const burger = document.querySelector(".header__burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});

// form validation
try {
  const validator = new JustValidate("#form");

  validator
    .addField("#name", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 50,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
      {
        rule: "minLength",
        value: 5,
      },
      {
        rule: "maxLength",
        value: 150,
      },
    ])
    .addField(
      "#textarea",
      [
        {
          rule: "required",
        },
        {
          rule: "minLength",
          value: 10,
        },
      ],
      {
        errorsContainer: document.querySelector(".errors-container-textarea"),
      },
    )
    .addField(
      "#checkbox",
      [
        {
          rule: "required",
        },
      ],
      {
        errorsContainer: document.querySelector(".errors-container-checkbox"),
      },
    )
    .onSuccess((event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (e) {}
