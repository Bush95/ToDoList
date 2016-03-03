function addEventListeners(){
    var text_input = document.getElementById('text-form__input');
    var char_counter = document.getElementById('letter_count');
    var form = document.getElementById('text-form');
    var max_string_length = 255;
    var num_of_items = 0;
    var item_id = 0;
        
    text_input.setAttribute('maxlength', max_string_length);
    text_input.addEventListener('keyup',count_chars,false);
    
    form.addEventListener('submit',function(e){
        e.preventDefault()
    },false);

    function count_chars(e){
        var value = this.value
        var value_length = value.length;
        char_counter.innerHTML = max_string_length - value_length;
        
        function list_header(){
            if (num_of_items > 0){
                document.getElementById('todo-items__header--empty').style.display = "none";
                document.getElementById('todo-items__header').style.display = "block";
            }else{
                document.getElementById('todo-items__header--empty').style.display = "block";
                document.getElementById('todo-items__header').style.display = "none";
            }
        }
        
        if(e.keyCode === 13){
            var new_item = document.createElement('div');
            var new_input = document.createElement('input');
            var new_label = document.createElement('label');
            var new_del = document.createElement('div');
            num_of_items++;
            item_id++;
            
            list_header();
            new_item.className = 'todo-items__item';
            
            new_input.id = 'item_'+item_id;
            new_input.setAttribute('type','checkbox');
            
            new_label.setAttribute('for','item_'+item_id);
            new_label.innerHTML = ' '+value;
            
            new_del.className = 'todo-items__delete';
            new_del.addEventListener('click',function(){
                this.parentNode.className += ' '+'todo-items__item--deleting';
                num_of_items--;
                list_header();
            },false);
            
            text_input.value = "";
            new_item.appendChild(new_input);
            new_item.appendChild(new_label);
            new_item.appendChild(new_del);
            document.getElementById('todo-items').appendChild(new_item);
            
            char_counter.innerHTML = max_string_length;
            return false;
        }else{
            return true;
        }
    }
};


function on_load_event(){
    addEventListeners();
}

window.onload = on_load_event();
