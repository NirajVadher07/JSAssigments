let todos = localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : [];


var displayTodos = () => {
    attach = document.querySelector('.displaytodos');
    attach.innerHTML = '';    
    if(todos.length == 0 ){
        attach.innerHTML = '<div class="text-xl font-bold italic text-white">EMPTY TODOS LIST</div>';
    }
    else{
        let count = 0 ;
        todos.forEach((e) => {        
            createTodoElement(e, count);            
            count++;
            
        })        
    }
}

var createTodoElement = (e, count) => {
    let maindiv = document.createElement('div');
    maindiv.classList.add('bg-white', 'text-xl', 'font-bold', 'p-3', 'pl-5', 'm-2', 'rounded-lg', 'min-w-[600px]', 'flex', 'justify-between');

        let subdiv = document.createElement('div');
        subdiv.classList.add('min-w-[70px]', 'flex', 'justify-evenly', 'items-center');

        let edit = document.createElement('button');
        edit.classList.add('text-[#3DBE29]', 'pr-5');
        edit.setAttribute('id',`edit-${count}`);
        let Delete = document.createElement('button');
        Delete.classList.add('text-[#E07C24]');
        Delete.setAttribute('id', `delete-${count}`);

                
        let h3 = document.createElement('h3');
        h3.setAttribute('id',`${count+1}`);
        h3.classList.add('flex', 'justify-evenly', 'items-center');
        let index = document.createTextNode(`${count+1}. `);
        h3.appendChild(index);
        
        let edittext = document.createTextNode("EDIT");
        let deletetext = document.createTextNode("DONE");
        
        
        const todo_input = document.createElement('input');
		todo_input.classList.add('text','p-2', 'rounded-full', 'pl-5');
		todo_input.type = 'text';
		todo_input.value = e;
		todo_input.setAttribute('readonly', 'readonly');
        todo_input.setAttribute('id',`${count}`);
        
        edit.appendChild(edittext);
        Delete.appendChild(deletetext);

        subdiv.appendChild(edit);
        subdiv.appendChild(Delete);        

        maindiv.append(h3);
        maindiv.appendChild(todo_input);
        maindiv.appendChild(subdiv);

        attach.appendChild(maindiv);


        edit.addEventListener('click', (_e) => {
			if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "SAVE";
				todo_input.removeAttribute("readonly");
				todo_input.focus();
			} else {
				edit.innerText = "EDIT";
                todos[count] = todo_input.value;
                localStorage.setItem('Todos', JSON.stringify(todos));
				todo_input.setAttribute("readonly", "readonly");
			}            
		});

		Delete.addEventListener('click', () => {
			// attach.removeChild(maindiv);  
            todos.splice(count,1);
            localStorage.setItem('Todos', JSON.stringify(todos));
            // console.log(todos);
            displayTodos();
		});
}

window.addEventListener("load", ()=>{
    displayTodos();
})

let  addButton = document.querySelector('.addButton');

addButton.addEventListener('click', ()=>{
    let todo = document.querySelector('.input').value;
    if(todo != ""){
        todos.push(todo);    
        localStorage.setItem('Todos', JSON.stringify(todos));
        // console.log(todos);    
        displayTodos();
        document.querySelector('.input').value = "";
    }
});


