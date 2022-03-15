import { todoApi } from "./todoApis.js";

/*
Given an Api, implement a todo app(features includes Add a todo, Change a todo Status, Delete Todo) in Vanilla JavaScript. 
FYI: You can add some css styles you want.
*/

//implement your app here\

let ol = document.getElementById("todoList");
todoApi.todos.forEach((todoItem) => {
  let li = document.createElement("li");
  let content = todoItem.content;
  let className = todoItem.isCompleted;
  li.textContent = content;
  li.id = content;
  li.className = className;
  li.onclick = taskComplete;
  let delBtn = document.createElement("button");
  delBtn.id = content;
  delBtn.textContent = "delete";
  delBtn.onclick = rmFromList;
  ol.appendChild(li);
  ol.appendChild(delBtn);
});

let addBtn = document.getElementById("addBtn");
addBtn.onclick = addToList;

function addToList() {
  const input = document.getElementById("inputBox");
  const entry = input.value;
  input.value = "";
  todoApi
    .addTodo({ content: entry, isCompleted: false })
    .then((response) => {
      let li = document.createElement("li");
      li.textContent = entry;
      li.id = entry;
      li.className = "false";
      li.onclick = taskComplete;
      let delBtn = document.createElement("button");
      delBtn.id = entry;
      delBtn.textContent = "delete";
      delBtn.onclick = rmFromList;

      ol.append(li);
      ol.append(delBtn);
      console.log(todoApi.todos);
    })
    .catch((error) => {
      console.log(error);
    });
}

function taskComplete(ele) {
  const li = ele.target;
  li.className = "true";
  todoApi.modTodo(todoApi.todos.findIndex((x) => x.content === li.id));
}

function rmFromList(ele) {
  const btn = ele.target;
  const content = btn.id;
  document.getElementById(content).remove();
  btn.remove();
  todoApi.delTodo(todoApi.todos.findIndex((x) => x.content === content));
}
