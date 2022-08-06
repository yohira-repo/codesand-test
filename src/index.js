import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
// 未完了リストから指定リスト削除
const deleteFromInCompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リスト作成
const createIncompleteList = (text) => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // create div
  const div = document.createElement("div");
  div.className = "list-row";

  // create li
  const li = document.createElement("li");
  li.innerText = text;

  // complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromInCompleteList(completeButton.parentNode);

    // add List Target
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });
  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromInCompleteList(deleteButton.parentNode);
  });

  // li under div
  div.appendChild(li);
  // button under div
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add incomplete list
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
