const button = document.getElementById("ex1_button");
const elem = document.getElementById("ex1_content");

button.addEventListener("click", () => {
  elem.textContent = "0,1,2,3,4,5,6,7,8,9";
});
