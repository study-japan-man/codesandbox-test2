import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createDoItem(inputText);
};

const createDoItem = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerHTML = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.parentNode;
    deleteFromIncompleteList(moveTarget);
    createDoneItem(moveTarget.firstElementChild.innerText);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("imcomplete-list").appendChild(div);
};

const createDoneItem = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerHTML = text;

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    const moveTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(moveTarget);
    createDoItem(moveTarget.firstElementChild.innerText);
  });

  div.appendChild(li);
  div.appendChild(backButton);
  document.getElementById("complete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
