import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // create div
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);
  // create li
  const li = document.createElement("li");
  li.innerText = inputText;

  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
