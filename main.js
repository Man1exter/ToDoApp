
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMainUL; //tasks below input and button
let $newTasks; // NEW ADD ELEMENT TASKS

let $popup; //main popup
let $editPopup; // edit popup change
let $inputPopup; // input popup
let $buttonAddPopup; // button to add popup like a accept 
let $closePopup; // close popup
let $editBtn; // open popup in tasks

let $numberId = 0;


const mainFct = () => {
          downloadEle();
          listenerEle();
};

const downloadEle = () => {
     $inputMain = document.querySelector(".todo");
      $alert = document.querySelector(".text1");
       $addMain = document.querySelector(".sMain");
        $tasksMainUL = document.querySelector("ul");

        $closePopup = document.querySelector(".fa-times-circle");
        $buttonAddPopup = document.querySelector(".save");
        $infoPopup = document.querySelector(".popin");
        $popup = document.querySelector(".popup");
        $editBtn = document.querySelector(".edit");
};

const listenerEle = () => {
        $addMain.addEventListener("click", addNewTasks);
        $tasksMainUL.addEventListener("click", changesLi);
        $tasksMainUL.addEventListener("click", changesLi2);
        $tasksMainUL.addEventListener("click", changesLi3);
        $tasksMainUL.addEventListener("click", changesLi4);
        $closePopup.addEventListener("click", minimal);
        $editBtn.addEventListener("click", openPopup);
        $buttonAddPopup.addEventListener("click", changePopup);
};


const addNewTasks = () => {
        if($inputMain.value !== ''){
                $numberId++;
                 $newTasks = document.createElement("li");
                 $newTasks.style.display ="flex";
                 $newTasks.style.marginLeft = 0 + "px";
                 $newTasks.style.paddingLeft = 59 + "px"
                $newTasks.setAttribute('id', `newTask${$numberId}`)
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
toolsPanel.classList.add("tools");
$newTasks.appendChild(toolsPanel);

const completeButton = document.createElement('i');
completeButton.classList.add("cls");
completeButton.innerHTML = '<i class="fas fa-thumbtack"></i>';
completeButton.style.position = "absolute";
completeButton.style.left = 11 + "px";


 const editButton = document.createElement('i');
editButton.classList.add("clg");
editButton.innerHTML = '<i class="fas fa-check"></i>';


 const deleteButton = document.createElement('span');
deleteButton.classList.add("new");
deleteButton.innerText = 'EDIT';

 const closeButton = document.createElement("i");
closeButton.classList.add("clf");
closeButton.innerHTML = '<i class="fas fa-times"></i>';

toolsPanel.appendChild(completeButton);
toolsPanel.appendChild(editButton);
toolsPanel.appendChild(deleteButton);
toolsPanel.appendChild(closeButton);

};

const changesLi = (e) => {
if (e.target.closest('span').classList.contains('new')) 
openTaskPopup(e);
}

const changesLi2 = (e) => {
 if (e.target.closest("i").className === 'clf') 
esCheck();
}

const changesLi3 = (e) => {
 if (e.target.closest('i').classList.contains('clg')) 
 timesCheck();
}

const changesLi4 = (e) => {
 if (e.target.closest('i').classList.contains('cls'))
pickThem();
};


const openTaskPopup = (e) => {
const oldToolsTarget = e.target.closest('li').id;
$editTodo = document.getElementById(oldToolsTarget);

$infoPopup.value = $editTodo.firstChild.textContent;

$popup.style.left = 0 + "%";
}

const minimal = () => {
$popup.style.left = -200 + "%";
};

const openPopup = () => {
$popup.style.left = 0 + "%";
};

const changePopup = () => {
        if($infoPopup.value !== ''){
                $editTodo.firstChild.textContent = $infoPopup.value;
                $popup.style.left = -200 + "%";
        }else{
        $infoPopup.innerText = "write some task"
        }
}

const pickThem = () => {
editButton.style.color = "white";
editButton.style.backgroundColor = "red";
};




document.addEventListener("DOMContentLoaded", mainFct);
