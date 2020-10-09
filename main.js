
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMain; //tasks below input and button



const mainFct = () => {
downloadEle();
listenerEle();
};

const downloadEle = () => {
const $inputMain = document.querySelector(".todo");
const $alert = document.querySelector(".------------------");
const $addMain = document.querySelector(".smain");
const $tasksMain = document.querySelector(".task1");
};

const listenerEle = () => {

};




document.addEventListener("DOMContentLoaded", mainFct);