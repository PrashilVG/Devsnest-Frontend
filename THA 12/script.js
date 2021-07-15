const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo =>{
    const html = `<li
    class="list-group-item "
  >
    <span>${todo}</span>
    <img class="delete" src="./Delete.svg" />
  </li>`;
  list.innerHTML += html;
};

//add todo

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
    
});

//delete todo

list.addEventListener('click',e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

