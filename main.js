
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMainUL; //tasks below input and button
let $newTasks; // NEW ADD ELEMENT TASKS


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
                 createToolsEle();
        } else {
        $alert.innerText = "Write task.. / tasks.. !"
        $alert.style.color = "red";
        $alert.style.textTransform = "uppercase"
          }
        };

const createToolsEle = () => {
toolsPanel = document.createElement('div');
toolsPanel.classList.add("tools");
$newTasks.appendChild(toolsPanel)

completeButton = document.createElement('i');
completeButton.classList.add("fas fa-thumbtack");
completeButton.innerText = '<i class="fas fa-thumbtack"></i>';

editButton = document.createElement('i');
editButton.classList.add("fas fa-times");
editButton.innerText = '<i class="fas fa-check"></i>';

deleteButton = document.createElement('span');
deleteButton.classList.add("edit");
deleteButton.innerText = 'EDIT';

closeButton = document.createElement("i");
closeButton.classList.add("fas fa-check");
close.innerText = '<i class="fas fa-times"></i>';

toolsPanel.appendChild(completeButton);
toolsPanel.appendChild(editButton);
toolsPanel.appendChild(deleteButton);
toolsPanel.appendChild(closeButton);


};


document.addEventListener("DOMContentLoaded", mainFct);