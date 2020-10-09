
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMain; //tasks below input and button



const mainFct = () => {
downloadEle();
listenerEle();
};

const downloadEle = () => {
     $inputMain = document.querySelector(".todo");
      $alert = document.querySelector(".------------------");
       $addMain = document.querySelector(".smain");
        $tasksMain = document.querySelector(".task1");
};

const listenerEle = () => {

};
const addNewTasks = () => {

};




document.addEventListener("DOMContentLoaded", mainFct);