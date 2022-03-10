let h1 = document.createElement("h1");
h1.textContent = "Homework 3";
document.body.appendChild(h1);
document.body.appendChild(document.createElement("hr"));

// 1 Table with styles you want to add
// Given the following array and implement the table dynamically

const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

let div1 = document.createElement("div");
div1.id = "task1";
let title1 = document.createElement("h3");
title1.textContent = "1 Table with styles you want to add";

let table = document.createElement("table");
let colGroup = document.createElement("colGroup");

Object.keys(tableInfo[0]).forEach((colName) => {
  let col = document.createElement("col");
  col.id = colName;
  colGroup.appendChild(col);
});
table.appendChild(colGroup);

let header = document.createElement("tr");
header.id = "tableHeader";
table.appendChild(header);

Object.keys(tableInfo[0]).forEach((headerName) => {
  let th = document.createElement("th");
  th.textContent = headerName[0].toUpperCase() + headerName.substring(1);
  header.appendChild(th);
});
tableInfo.forEach((ele) => {
  let row = document.createElement("tr");
  row.id = Object.values(ele)[0];
  Object.values(ele).forEach((val) => {
    let rowItem = document.createElement("td");
    rowItem.textContent = val;
    row.appendChild(rowItem);
  });
  table.appendChild(row);
});

div1.appendChild(title1);
div1.appendChild(table);
document.body.appendChild(div1);
document.body.appendChild(document.createElement("hr"));

// 2. Given the array and generate order list and unordered list as following:
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let div2 = document.createElement("div");
div2.id = "task2";
let title2 = document.createElement("h3");
title2.textContent =
  "2. Given the array and generate order list and unordered list";

let ol = document.createElement("ol");
let ul = document.createElement("ul");

let nodes = list.map((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  return li;
});
ol.append(...nodes);

list.forEach((lang) => {
  let li = document.createElement("li");
  li.textContent = lang;
  ul.appendChild(li);
});

div2.appendChild(title2);
div2.append(ol);
div2.append(ul);
document.body.appendChild(div2);
document.body.appendChild(document.createElement("hr"));

/*
  3 Given an array and implement a dropdown list with the following options (please find the
  screenshot/mockup below)
  FYI: use property value in the object as the value attribute in the option tag when you
  create the dropdown list
*/
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let div3 = document.createElement("div");
div3.id = "task3";
let title3 = document.createElement("h3");
title3.textContent =
  "3 Given an array and implement a dropdown list with the following";

let select = document.createElement("select");
dropDownList.forEach((city) => {
  let option = document.createElement("option");
  option.value = city["value"];
  option.textContent = city["content"];
  select.appendChild(option);
});

div3.appendChild(title3);
div3.appendChild(select);
document.body.appendChild(div3);
