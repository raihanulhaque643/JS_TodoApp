const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = (todo) => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`

    list.innerHTML += html; 

};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //trim removes extra spaces before and after in a string

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
}); 