function on_load_event() {
    window.max_text_length = document.getElementById('text-form__input').getAttribute('maxlength');
    window.todo_highest_id = 0;
    window.todos_num = 0;

    add_event_listeners();
}

function add_event_listeners() {
    document.getElementById('text-form__input').addEventListener('keyup', letter_count, false);
    document.getElementById('text-form').addEventListener('submit', submit_f, false);
}
function letter_count(e) {
    var curr_length = this.value.length;
    document.getElementById('letter_count').innerHTML = max_text_length - curr_length;
}
function submit_f(e){
    add_todo(e);
}
function add_todo(e) {
    e.preventDefault();

    var new_item = document.createElement('div');
    var new_item_input = document.createElement('input');
    var new_item_label = document.createElement('label');
    var new_item_del = document.createElement('div');

    new_item.className = 'todo-items__item';
    new_item_input.id = 'item_' + todo_highest_id;
    new_item_input.setAttribute('type', 'checkbox');
    new_item_label.setAttribute('for', 'item_' + todo_highest_id);
    new_item_label.innerHTML = ' ' + document.getElementById('text-form__input').value;
    new_item_del.className = 'todo-items__delete';
    
    new_item_del.addEventListener('click', delete_todo, false);

    new_item.appendChild(new_item_input);
    new_item.appendChild(new_item_label);
    new_item.appendChild(new_item_del);
    document.getElementById('todo-items').appendChild(new_item);
    
    todo_highest_id++;
    todos_num++;
    
    clear_input();
    set_header();
}
function delete_todo() {
    this.parentNode.className += ' ' + 'todo-items__item--deleting';
    todos_num--;
    set_header();
}
function clear_input() {
    document.getElementById('text-form__input').value = "";
}
function set_header(){
    var h_nothing = document.getElementById('todo-items__header--empty');
    var h_filled = document.getElementById('todo-items__header');

    if(todos_num === 0){
        h_filled.style.display = 'none';
        h_nothing.style.display = 'block';
    }
    else{
        h_filled.style.display = 'block';
        h_nothing.style.display = 'none';
    }
}

window.onload = on_load_event();