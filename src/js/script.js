import JustValidate from "just-validate";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

//tabs
const tabs = document.querySelectorAll(".catalog__tab");
const items = document.querySelectorAll(".catalog__item");

items.forEach((item, index) => {
  item.style.display = index === 0 ? "flex" : "none";
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("catalog__tab_active");
    });

    items.forEach((item) => {
      item.style.display = "none";
    });

    tab.classList.add("catalog__tab_active");

    if (items[index]) {
      items[index].style.display = "flex";
    }
  });
});

// slider
try {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".works__button-next",
      prevEl: ".works__button-prev",
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },

      1920: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
  });
} catch (e) {}

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

try {
  const validator = new JustValidate("#footer__form");

  validator
    .addField(
      "#footer__form-email",
      [
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
      ],
      {
        errorsContainer: document.querySelector(
          ".footer__errors-container-form-email",
        ),
      },
    )
    .addField(
      "#footer__checkbox",
      [
        {
          rule: "required",
        },
      ],
      {
        errorsContainer: document.querySelector(
          ".footer__errors-container-checkbox",
        ),
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
