// Top Button
const topButton = document.querySelector(".left_top_button");

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Navigation
const navItem = document.querySelectorAll(".nav_item");

navItem[0].addEventListener("click", function () {
  const target = document.querySelector(".header_box");
  const rect = target.offsetTop;
  window.scrollTo({
    top: rect,
    behavior: "smooth",
  });
});
navItem[1].addEventListener("click", function () {
  const target = document.querySelector(".main_box");
  const rect = target.offsetTop;
  window.scrollTo({
    top: rect,
    behavior: "smooth",
  });
});
navItem[2].addEventListener("click", function () {
  const target = document.querySelector(".box_5_wrapper");
  const rect = target.offsetTop;
  console.log(rect);
  window.scrollTo({
    top: rect,
    behavior: "smooth",
  });
});
navItem[3].addEventListener("click", function () {
  const target = document.querySelector(".box_7_wrapper");
  const rect = target.offsetTop;

  window.scrollTo({
    top: rect,
    behavior: "smooth",
  });
});

// Contact Email
const submitBtn = document.querySelector(".submit_button");
submitBtn.addEventListener("click", function () {
  const form_inputs = document.querySelectorAll(".form_inputs");
  const text_area = document.querySelector(".form_textarea");
  const body = `
  First Name: ${form_inputs[0].value}
  Last Name: ${form_inputs[1].value}
  Email: ${form_inputs[2].value}
  Message: ${text_area.value}
  `;
  const mailtoLink = `mailto:ceo@a-on.shop?subject=AON_Sysyem_Contact&body=${encodeURIComponent(
    body
  )}`;

  // 새 창에서 메일 클라이언트를 엽니다.
  window.open(mailtoLink);
});

