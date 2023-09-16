const addBtn = document.getElementById('hAddBtn');
const date = document.getElementById('exampleFormControlInput1');
const title = document.getElementById('exampleFormControlInput2');
const toDo = document.getElementById('exampleFormControlTextarea1');
const myToDoList = document.getElementById('hBgColor');
const deleteAllBtn = document.getElementById('hDeleteAllBtn');
const cEditBtn = document.getElementById('hEditBtn');
const cDeleteBtn = document.getElementById('hDeleteBtn');
const cDoneBtn = document.getElementById('hDoneBtn');
const cCancelBtn = document.getElementById ('hCancelBtn');



// Storing data in localStorage as an array of objects
function storeCardData(cardData) {
    const existingData = JSON.parse(localStorage.getItem('cards')) || [];
    existingData.push(cardData);
    localStorage.setItem('cards', JSON.stringify(existingData));
  }
  
  // Retrieving and displaying stored card data:

  function showTheStoredData() {
    JSON.parse(localStorage.getItem('cards')) || [];
  }

  showTheStoredData();

addBtn.addEventListener('click',() => {
    if (toDo.value.trim() === '' || title.value.trim() === '' || date.value.trim() === '' ) {   return alert('Please fill all the fields.')
    };

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
    btnDelete.addEventListener('click', () => {
      myToDoList.removeChild(divParent);
      localStorage.removeItem(cardData);
      cardData.remove='true';
    });

    
    let iconDelete = document.createElement('i');
    iconDelete.classList.add('bi-trash');
  
    let btnDone = document.createElement('button');
    btnDone.classList.add('btn','btn-success');
    btnDone.style.fontSize = '1.2 rem';
 
    let iconDone = document.createElement('i');
    iconDone.classList.add('bi-check-circle');
    


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



localStorage.setItem('date', date.value);
localStorage.setItem('title', title.value);
localStorage.setItem('toDo', toDo.value);


const cardData = {
    date: date.value,
    title: title.value,
    toDo: toDo.value,
  };

 
storeCardData(cardData);


toDo.value = '';
title.value = '';
date.value = '';



});


function showStoredData () {
    const storedData = JSON.parse(localStorage.getItem('cards')) || [];

  storedData.forEach((cardData) => {
    
   console.log(storedData);
 
    
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
    btnDelete.addEventListener('click', () => {
      myToDoList.removeChild(divParent);
      localStorage.removeItem(cardData);
      cardData.remove='true';
    });

    
    let iconDelete = document.createElement('i');
    iconDelete.classList.add('bi-trash');
  
    let btnDone = document.createElement('button');
    btnDone.classList.add('btn','btn-success');
    btnDone.style.fontSize = '1.2 rem';
 
    let iconDone = document.createElement('i');
    iconDone.classList.add('bi-check-circle');
    


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

});
};


deleteAllBtn.addEventListener('click', () => {
    localStorage.removeItem('cards'); // Clear all stored cards
    myToDoList.innerHTML = ''; // Remove all displayed cards
    localStorage.clear();
  });

deleteAllBtn.addEventListener('click',clearAllHandler);