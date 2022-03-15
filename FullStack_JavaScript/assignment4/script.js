let taskArr = [];

let inputDiv = document.createElement("div");
inputDiv.id = "inputDiv";
let input = document.createElement("input");
input.id = "inputBox";
input.type = "text";
let addBtn = document.createElement("button");
addBtn.onclick = addToList;
addBtn.textContent = "Add task";
inputDiv.append(input);
inputDiv.append(addBtn);
document.body.append(inputDiv);
console.log("input div created");

let ol = document.createElement("ol");
ol.addEventListener("click", rmFromList);
document.body.append(ol);
console.log("ol div created");

function addToList() {
  const entry = document.getElementById("inputBox").value;
  taskArr.push({ content: entry, isCompleted: false });
  console.log(taskArr);
  let li = document.createElement("li");
  li.textContent = entry;
  li.id = entry;
  let btn = document.createElement("button");
  btn.textContent = "delete";
  li.append(btn);
  ol.append(li);
  console.log("task added to list");
}

function rmFromList(e) {
  const btn = e.target;
  const li = btn.closest("li");
  const liContent = li.id;
  li.remove();
  const index = taskArr.findIndex((x) => x.content === liContent);
  taskArr = [...taskArr.slice(0, index), ...taskArr.slice(index + 1)];
  console.log(taskArr);
}
