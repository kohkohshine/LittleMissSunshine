const addBtn = document.getElementById('hAddBtn');
const date = document.getElementById('exampleFormControlInput1');
const title = document.getElementById('exampleFormControlInput2');
const toDo = document.getElementById('exampleFormControlTextarea1');
const myToDoList = document.getElementById('hBgColor');
const deleteAllBtn = document.getElementById('hDeleteAllBtn');
const buttonAppear = document.querySelector('#buttonAppear');
const successAlert = document.getElementById('successAlert');
const alertDiv = document.getElementById('alertDiv');




hDeleteAllBtn.classList.add('d-none');
successAlert.classList.add('d-none');






function storeCardData(cardData) {
const existingData = JSON.parse(localStorage.getItem('cards')) || [];
existingData.push(cardData);
localStorage.setItem('cards', JSON.stringify(existingData));
};


function showTheStoredData() {
JSON.parse(localStorage.getItem('cards')) || [];
};


showTheStoredData();


addBtn.addEventListener('click',() => {
if (toDo.value.trim() === '' || title.value.trim() === '' || date.value.trim() === '' ) { return alert('Please fill all the fields.')
};


hDeleteAllBtn.classList.add('d-block');
buttonAppear.appendChild(hDeleteAllBtn);


successAlert.classList.add('d-block');
alertDiv.appendChild(successAlert);


function hideAlert (){
successAlert.classList.remove('d-block');
successAlert.classList.add('d-none');
} ;


setTimeout(hideAlert,2000);




let divParent = document.createElement('div');
divParent.classList.add('card','shadow','mb-1');
divParent.style.maxWidth = '50vw';
divParent.style.minWidth = '30vw';


let divFirstChild = document.createElement('div');
divFirstChild.classList.add('card-body');


let divSecondChild = document.createElement('div');
divSecondChild.classList.add('d-flex','justify-content-end');


let p = document.createElement('p');
p.classList.add('p-0','hDate');
p.style.fontSize = '10 px';
p.innerHTML = `${date.value}`;


let h5 = document.createElement('h5');
h5.classList.add('card-title');
h5.style.marginTop = '-1.5rem';
h5.innerHTML = `${title.value}`;


let p2 = document.createElement('p');
p2.classList.add('card-text');
p2.innerHTML = `${toDo.value}`;


let divThirdChild = document.createElement('div');
divThirdChild.classList.add('gap-1','hIcons');
let btnEdit = document.createElement('button');
btnEdit.classList.add('btn', 'btn-primary');
btnEdit.style.fontSize = '1.2 rem';


let iconEdit = document.createElement('i');
iconEdit.classList.add('bi-pencil-square');
let btnDelete = document.createElement('button');
btnDelete.classList.add('btn','btn-danger');
btnDelete.style.fontSize = '1.2 rem';
let iconDelete = document.createElement('i');
iconDelete.classList.add('bi-trash');
let btnDone = document.createElement('button');
btnDone.classList.add('btn','btn-success');
btnDone.style.fontSize = '1.2 rem';
let iconDone = document.createElement('i');
iconDone.classList.add('bi-check-circle');
let btnUndo = document.createElement('button');
btnUndo.classList.add('btn','btn-warning', 'd-none');
btnUndo.style.fontSize = '1.2 rem';
let iconUndo = document.createElement('i');
iconUndo.classList.add('bi-arrow-counterclockwise', 'd-none');
myToDoList.appendChild(divParent);
divParent.appendChild(divFirstChild);
divFirstChild.appendChild(divSecondChild);
divSecondChild.appendChild(p);
divFirstChild.appendChild(h5);
divFirstChild.appendChild(p2);
divFirstChild.appendChild(divThirdChild);
divThirdChild.appendChild(btnEdit);
btnEdit.appendChild(iconEdit);
divThirdChild.appendChild(btnDelete);
btnDelete.appendChild(iconDelete);
divThirdChild.appendChild(btnUndo);
btnUndo.appendChild(iconUndo);
divThirdChild.appendChild(btnDone);
btnDone.appendChild(iconDone);




//Delete Feature


function deleteCard () {
myToDoList.removeChild(divParent);
localStorage.removeItem(cardData);
};


btnDelete.onclick = deleteCard;


//Done Feature


function doneCard () {
/*const existingDataDone = JSON.parse(localStorage.getItem('cards')) || [];
let newDataDone = existingDataDone.splice(3,1,'true');
localStorage.setItem('cards', JSON.stringify(newDataDone));
console.log(cardData.done);*/


cardData.done = 'true';
// Save the updated card data to localStorage
const existingData = JSON.parse(localStorage.getItem('cards')) || [];
// Find the index of the card data object to update
const indexToUpdate = existingData.findIndex(item => item.date === cardData.date);
// Update the card data object in the array
if (indexToUpdate !== -1) {
existingData[indexToUpdate] = cardData;
localStorage.setItem('cards', JSON.stringify(existingData));
};
divParent.style.backgroundColor = '#28a745';
p.style.textDecorationLine ='line-through';
p2.style.textDecorationLine = 'line-through';
h5.style.textDecorationLine ='line-through';
btnDone.classList.add('d-none');
iconDone.classList.add('d-none');
btnUndo.classList.remove('d-none');
iconUndo.classList.remove('d-none');
}


btnDone.onclick = doneCard;


//Undo Feature


function undoCard () {
divParent.style.backgroundColor = 'white';
p.style.textDecorationLine ='none';
p2.style.textDecorationLine = 'none';
h5.style.textDecorationLine ='none';
btnUndo.classList.add('d-none');
iconUndo.classList.add('d-none');
btnDone.classList.remove('d-none');
iconDone.classList.remove('d-none');
}


btnUndo.onclick = undoCard;


localStorage.setItem('date', date.value);
localStorage.setItem('title', title.value);
localStorage.setItem('toDo', toDo.value);
localStorage.setItem('done', 'false');
localStorage.setItem('remove', 'false');


const cardData = {
date: date.value,
title: title.value,
toDo: toDo.value,
done: 'false',
remove: 'false',
};


storeCardData(cardData);




toDo.value = '';
title.value = '';
date.value = '';




});








function showTheStoredData () {
const storedData = JSON.parse(localStorage.getItem('cards')) || [];


storedData.forEach((cardData) => {


console.log(storedData);


hDeleteAllBtn.classList.add('d-block');
buttonAppear.appendChild(hDeleteAllBtn);
let divParent = document.createElement('div');
divParent.classList.add('card','shadow','mb-1');
divParent.style.maxWidth = '50vw';
divParent.style.minWidth = '30vw';


let divFirstChild = document.createElement('div');
divFirstChild.classList.add('card-body');


let divSecondChild = document.createElement('div');
divSecondChild.classList.add('d-flex','justify-content-end');


let p = document.createElement('p');
p.classList.add('p-0','hDate');
p.style.fontSize = '10 px';
p.innerHTML = `${cardData.date}`;


let h5 = document.createElement('h5');
h5.classList.add('card-title');
h5.style.marginTop = '-1.5rem';
h5.innerHTML =`${cardData.title}`;


let p2 = document.createElement('p');
p2.classList.add('card-text');
p2.innerHTML = `${cardData.toDo}`;


let divThirdChild = document.createElement('div');
divThirdChild.classList.add('gap-1','hIcons');
let btnEdit = document.createElement('button');


btnEdit.classList.add('btn', 'btn-primary');
btnEdit.style.fontSize = '1.2 rem';


let iconEdit = document.createElement('i');
iconEdit.classList.add('bi-pencil-square');


let btnDelete = document.createElement('button');
btnDelete.classList.add('btn','btn-danger');
btnDelete.style.fontSize = '1.2 rem';
let iconDelete = document.createElement('i');
iconDelete.classList.add('bi-trash');




let btnDone = document.createElement('button');
btnDone.classList.add('btn','btn-success');
btnDone.style.fontSize = '1.2 rem';
let iconDone = document.createElement('i');
iconDone.classList.add('bi-check-circle');


let btnUndo = document.createElement('button');
btnUndo.classList.add('btn','btn-warning', 'd-none');
btnUndo.style.fontSize = '1.2 rem';
let iconUndo = document.createElement('i');
iconUndo.classList.add('bi-arrow-counterclockwise','d-none');
myToDoList.appendChild(divParent);
divParent.appendChild(divFirstChild);
divFirstChild.appendChild(divSecondChild);
divSecondChild.appendChild(p);
divFirstChild.appendChild(h5);
divFirstChild.appendChild(p2);
divFirstChild.appendChild(divThirdChild);
divThirdChild.appendChild(btnEdit);
btnEdit.appendChild(iconEdit);
divThirdChild.appendChild(btnDelete);
btnDelete.appendChild(iconDelete);
divThirdChild.appendChild(btnDone);
btnDone.appendChild(iconDone);
divThirdChild.appendChild(btnUndo);
btnUndo.appendChild(iconUndo);


//Delete Feature


function deleteCard () {
myToDoList.removeChild(divParent);
localStorage.removeItem(cardData);
};


btnDelete.onclick = deleteCard;


//Done Feature


function doneCard (dataCard) {


divParent.style.backgroundColor = '#28a745';
p.style.textDecorationLine = 'line-through';
p2.style.textDecorationLine = 'line-through';
h5.style.textDecorationLine = 'line-through';
btnDone.classList.add('d-none');
iconDone.classList.add('d-none');
btnUndo.classList.remove('d-none');
iconUndo.classList.remove('d-none');
}


btnDone.onclick = doneCard;




//Undo Feature


function undoCard () {
divParent.style.backgroundColor = 'white';
p.style.textDecorationLine ='none';
p2.style.textDecorationLine = 'none';
h5.style.textDecorationLine ='none';
btnUndo.classList.add('d-none');
iconUndo.classList.add('d-none');
btnDone.classList.remove('d-none');
iconDone.classList.remove('d-none');
}


btnUndo.onclick = undoCard;


//if the buttondone was triggered, recall this information, then apply button done function.


if ( cardData.done === 'true') {
return doneCard();
};
//
//if the buttonremove was triggered, recall this information, then apply button delete once.
//let cardRemoved = cardData.remove.value
//if (cardRemoved === 'true'){
// return deleteCard();
//}


});
};






//Delete All Feature


deleteAllBtn.addEventListener('click', () => {
localStorage.removeItem('cards');
myToDoList.innerHTML = '';
localStorage.clear();
deleteAllBtn.classList.remove('d-block');
});









