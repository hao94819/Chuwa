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
  let span = document.createElement("span");

  li.id = content;
  li.className = className;
  span.textContent = content;
  span.onclick = taskComplete;

  let delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.onclick = rmFromList;

  li.appendChild(span);
  li.appendChild(delBtn);
  ol.appendChild(li);
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
      let span = document.createElement("span");

      li.id = entry;
      li.className = "false";
      span.textContent = entry;
      span.onclick = taskComplete;

      let delBtn = document.createElement("button");
      delBtn.textContent = "delete";
      delBtn.onclick = rmFromList;

      li.appendChild(span);
      li.appendChild(delBtn);
      ol.appendChild(li);
    })
    .catch((error) => {
      console.log(error);
    });
}

function taskComplete(ele) {
  const span = ele.target;
  const content = span.textContent;
  const li = document.getElementById(content);
  if (li.className === "true") {
    li.className = "false";
    todoApi.modTodo(todoApi.todos.findIndex((x) => x.content === li.id));
  } else if (li.className === "false") {
    li.className = "true";
    todoApi.modTodo(todoApi.todos.findIndex((x) => x.content === li.id));
  }
}

function rmFromList(ele) {
  const btn = ele.target;
  const li = btn.closest("li");
  const content = li.id;
  btn.closest("li").remove();
  todoApi.delTodo(todoApi.todos.findIndex((x) => x.content === content));
}

// issue: need to consider task with same contents (same id/text)
