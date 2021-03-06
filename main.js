
let $inputMain; // main input on sites
let $alert; // alert to add tasks
let $addMain; // main button to add tasks below
let $tasksMainUL; //tasks below input and button
let $newTasks; // NEW ADD ELEMENT TASKS
let $allEffectOnUl;

let $popup; //main popup
let $editPopup; // edit popup change
let $inputPopup; // input popup
let $buttonAddPopup; // button to add popup like a accept 
let $closePopup; // close popup
let $editBtn; // open popup in tasks
let $yes; // accept button
let $no; // delete button

let $numberId = 0;
let $allTasksLi;

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
        $allTasksLi = $tasksMainUL.getElementsByTagName("li");

};

const listenerEle = () => {
        $addMain.addEventListener("click", addNewTasks);
        $tasksMainUL.addEventListener("click", changesLi);
        $closePopup.addEventListener("click", minimal);
        $editBtn.addEventListener("click", openPopup);
        $buttonAddPopup.addEventListener("click", changePopup);
        $inputMain.addEventListener("keyup",keyCodeMove);
};


const addNewTasks = () => {
        if($inputMain.value !== ''){
                $numberId++;
                 $newTasks = document.createElement("li");
                 $newTasks.style.display = "relative";
                 $newTasks.style.height = 50 + "px";
                 $newTasks.style.textAlign = "center";
                 $newTasks.style.lineHeight  = 50 + "px"
                


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


        const keyCodeMove = (eve) => {
                if(eve.keyCode === 13){
                addNewTasks(eve);
                };
        }; 

const createToolsEle = () => {
const toolsPanel = document.createElement('div');
toolsPanel.classList.add("tools");
toolsPanel.style.marginTop = -10.5 + "%"
$newTasks.appendChild(toolsPanel);

const completeButton = document.createElement('button');
completeButton.classList.add("pickBtn");
completeButton.innerHTML = '<i class="fas fa-thumbtack"></i>';
completeButton.style.position = "relative";
completeButton.style.left = -36 + "%";



 const editButton = document.createElement('button');
editButton.classList.add("yesBtn");
editButton.innerHTML = '<i class="fas fa-check"></i>';
editButton.style.position = "relative";
editButton.style.left = 31.8 + "%";


 const deleteButton = document.createElement('span');
deleteButton.classList.add("new");
deleteButton.innerText = 'EDIT';
deleteButton.style.position = "relative";
deleteButton.style.left = 32.5 + "%";
deleteButton.style.paddingLeft = 20 + "px"
deleteButton.style.paddingTop = 10 + "px"
deleteButton.style.paddingRight = 20 + "px"

 const closeButton = document.createElement("button");
closeButton.classList.add('noBtn');
closeButton.innerHTML = '<i class="fas fa-times"></i>';
closeButton.style.position = "relative";
closeButton.style.left = 35 + "%";


toolsPanel.appendChild(completeButton);
toolsPanel.appendChild(editButton);
toolsPanel.appendChild(deleteButton);
toolsPanel.appendChild(closeButton);

};

const changesLi = (e) => {
if (e.target.closest('span').classList.contains('new')) {
e.target.closest('span').classList.toggle('movs');
openTaskPopup(e);

} else if (e.target.closest('button').classList.contains('noBtn')) {
e.target.closest('button').classList.toggle('movsss');
esRemove(e);

} else if (e.target.closest('button').className === 'yesBtn') {
e.target.closest('button').classList.toggle('movss');
 timesCheck(e);

} else if (e.target.closest('button').className === 'pickBtn'){
e.target.closest('button').classList.toggle('picker');
pickThem(e);
}

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
const esRemove = (e) => {
        const deleteTaskPr = e.target.closest("li");
        deleteTaskPr.remove();
}




document.addEventListener("DOMContentLoaded", mainFct);
