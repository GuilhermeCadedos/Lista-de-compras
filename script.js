const form = document.querySelector("#shopping-form");
const input = document.querySelector("#input-shopping");
const list = document.querySelector("#shopping-list");
const alertMessage = document.querySelector(".mensagemAlerta");
const closeAlertButton = document.querySelector(".fecharAlerta");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemName = input.value.trim();

  if (itemName === "") {
    input.focus();
    return;
  }

  const item = document.createElement("li");
  const itemDetails = document.createElement("div");
  const checkbox = document.createElement("input");
  const name = document.createElement("span");
  const removeButton = document.createElement("button");
  const trashIcon = document.createElement("img");

  checkbox.type = "checkbox";
  name.textContent = itemName;

  removeButton.type = "button";
  removeButton.className = "remove-item";
  removeButton.setAttribute("aria-label", `Remover${itemName}`);
  trashIcon.src = "./assets/icone-lixeira.svg";
  trashIcon.alt = "";

  removeButton.append(trashIcon);
  itemDetails.append(checkbox, name);
  item.append(itemDetails, removeButton);
  list.append(item);

  input.value = "";
  input.focus();
});

list.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-item");

  if (!removeButton) return;

  removeButton.closest("li").remove();
  alertMessage.classList.add("visivel");
});

closeAlertButton.addEventListener("click", () => {
  alertMessage.classList.remove("visivel");
});
