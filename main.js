
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMain; //tasks below input and button
let $newTasks; // NEW ADD ELEMENT TASKS



const mainFct = () => {
downloadEle();
listenerEle();
};

const downloadEle = () => {
     $inputMain = document.querySelector(".todo");
      $alert = document.querySelector(".tex1");
       $addMain = document.querySelector(".smain");
        $tasksMain = document.querySelector("ul");
};

const listenerEle = () => {

};
const addNewTasks = () => {
if($inputMain.value !== ''){
         $newTasks = document.createElement("li");
         $newTasks.innerText = $inputMain.value;
         $tasksMain.appendChild($newTasks);

         $inputMain.value = '';
         $alert.innerText = '';
} else {
$alert.innerText = "Write task / tasks!"
$alert.style.color = "red";
  }
};


const eventsMain = () => {
$addMain.addEventListener("click",addNewTasks)
}


document.addEventListener("DOMContentLoaded", mainFct);