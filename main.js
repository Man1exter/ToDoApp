
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
        $addMain.addEventListener("click", addNewTasks);
        $tasksMainUL.addEventListener("click",changesLi);
};


const addNewTasks = () => {
        if($inputMain.value !== ''){
                 $newTasks = document.createElement("li");
                 $newTasks.style.display ="flex";
                 $newTasks.style.marginLeft = 0 + "px";
                 $newTasks.style.paddingLeft = 59 + "px"
                
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
const toolsPanel = document.createElement('div');
toolsPanel.classList.add(".tools");
$newTasks.appendChild(toolsPanel);

const completeButton = document.createElement('i');
completeButton.classList.add(".fa-thumbtack");
completeButton.innerHTML = '<i class="fas fa-thumbtack"></i>';
completeButton.style.position = "absolute";
completeButton.style.left = 11 + "px";


 const editButton = document.createElement('i');
editButton.classList.add(".fa-times");
editButton.innerHTML = '<i class="fas fa-check"></i>';

 const deleteButton = document.createElement('span');
deleteButton.classList.add("edit");
deleteButton.innerText = 'EDIT';

 const closeButton = document.createElement("i");
closeButton.classList.add(".fa-check");
closeButton.innerHTML = '<i class="fas fa-times"></i>';

toolsPanel.appendChild(completeButton);
toolsPanel.appendChild(editButton);
toolsPanel.appendChild(deleteButton);
toolsPanel.appendChild(closeButton);

};
const changesLi = (e) => {

if(e.target.closest("i").classList.contains("fa-thumbtack")){
e.target.closest("i").classList.toggle("sprinter");
        
} 
else if (e.target.closest("i").className === 'fas fa-times') {
        e.target.closest("i").classList.toggle("sprinter2");
} 
else if (e.target.closest("i").className === 'fas fa-check') {
        e.target.closest("i").classList.toggle("sprinter3");
        e.target.closest("li").classList.toggle("vice");}

};

document.addEventListener("DOMContentLoaded", mainFct);