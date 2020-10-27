let $todoInput;
let $inputBtn;
let $ulList;
let $number = 0;
let $popup;
let $popupAcceptBtn;
let $popupCancelBtn;
let $popupInput;
let $warning;

const main = () =>{
    prepareDomElements();
    prepareDomEvents();
};


//pobieramy nasze elementy
const prepareDomElements = () =>{
    $todoInput = document.querySelector('.todoInput');
    $inputBtn = document.querySelector('.inputBtn');
    $ulList = document.querySelector('.ulList');
    $popup = document.querySelector('.popup');
    $popupAcceptBtn = document.querySelector('.popupAccept');
    $popupCancelBtn = document.querySelector('.popupCancel');
    $popupInput = document.querySelector('.popupInput');
    $warning = document.querySelector('.todoList h3');
};


//nadajemy nasluchiwanie
const prepareDomEvents = () =>{
    $inputBtn.addEventListener('click', addTask)
    $todoInput.addEventListener('keyup', addKeyTask)
    $ulList.addEventListener('click', tools)
    $popupAcceptBtn.addEventListener('click', popAccept)
    $popupCancelBtn.addEventListener('click', popCancel)
    $popupInput.addEventListener('click', popInput)

};

const addKeyTask=(e)=>{
    if(e.keyCode==13){
        addTask();
    }
}

const addTask = () =>{
    if($todoInput.value!=''){
        createNewLi();
        $todoInput.value='';
        $warning.classList.add('none');
    }
    else{

    }

};

const createNewLi = () => {
    $number++;
    let liElem = document.createElement('li');
    liElem.innerHTML= `<div class="firstColumn"><div class="tools"><button class="accept far fa-circle"></button></div>${$todoInput.value}</div><div class="secondColumn tools"><button class="edit"><i class="fas fa-edit"></i></button><button class="cancel"><i class="fas fa-times"></i></button></div>`;
    $ulList.appendChild(liElem)
    liElem.classList.add(`test-${$number}`)

};

const tools = (e) =>{
    if(e.target.closest('button').classList.contains('accept')){
        acceptClick(e);
    } else if(e.target.closest('button').classList.contains('cancel')){
        cancelClick(e);
    } else if(e.target.closest('button').classList.contains('edit')){
        editClick(e);
    }
}

const acceptClick = (e) =>{
    e.target.closest('li').classList.toggle('done')
    // e.target.closest('i').classList.toggle('far')
    // e.target.closest('i').classList.toggle('fas')
    // e.target.closest('i').classList.toggle('fa-circle')
    // e.target.closest('i').classList.toggle('fa-check-circle')

    e.target.closest('button').classList.toggle('far')
    e.target.closest('button').classList.toggle('fas')
    e.target.closest('button').classList.toggle('fa-circle')
    e.target.closest('button').classList.toggle('fa-check-circle')
    
}
//usunieci taska
const cancelClick = (e) =>{
    console.log('kliknalem')
    e.target.closest('li').remove();
    if(document.querySelectorAll("ul li").length==0){
        $warning.classList.remove('none');
    };


}
let $actualId;
const editClick = (e) =>{
    $popup.classList.remove('none');
    $popupInput.value=e.target.closest('li').innerText;

    $actualId=e.target.closest('li').classList.value
    console.log($actualId);
}




//jeszcze nie gotowe
const popAccept = (e) =>{
    let wartosc = $popupInput.value;
    let a = document.querySelector(`.${$actualId}`);
    a.innerHTML= `<div class="firstColumn"><div class="tools"><button class="accept far fa-circle"></button></div>${wartosc}</div><div class="secondColumn tools"><button class="edit"><i class="fas fa-edit"></i></button><button class="cancel"><i class="fas fa-times"></i></button></div>`;
    $popup.classList.add('none')
}

// ..zrobiony zamyka sie popup
const popCancel = () =>{
    $popup.classList.add('none')
}

const popInput = () =>{
    console.log('input')
}





document.addEventListener('DOMContentLoaded', main);