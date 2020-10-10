
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMainUL; //tasks below input and button
let $newTasks; // NEW ADD ELEMENT TASKS

let $toolsPanel;
let $completeButton;
let $editButton;
let $deleteButton;


const mainFct = () => {
downloadEle();
listenerEle();
};

const downloadEle = () => {
     $inputMain = document.querySelector(".todo");
      $alert = document.querySelector(".text1");
       $addMain = document.querySelector(".sMain");
        $tasksMainUL = document.querySelector("ul");
};

const listenerEle = () => {
        $addMain.addEventListener("click", addNewTasks)
};

const addNewTasks = () => {
        if($inputMain.value !== ''){
                 $newTasks = document.createElement("li");
                 $newTasks.innerText = $inputMain.value;
                 $tasksMainUL.appendChild($newTasks);
        
                 $inputMain.value = '';
                 $alert.innerText = '';
        } else {
        $alert.innerText = "Write task.. / tasks.. !"
        $alert.style.color = "red";
        $alert.style.textTransform = "uppercase"
          }
        };

const createToolsEle = () => {
$toolsPanel = document.createElement(div.tools);
$completeButton = document.createElement(button.complete);
$editButton = document.createElement(button.edit);
$deleteButton = document.createElement(button.delete);
};


document.addEventListener("DOMContentLoaded", mainFct);