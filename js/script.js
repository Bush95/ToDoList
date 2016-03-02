function addEventListeners(){
    var text_input = document.getElementById('text-form__input');
    var char_counter = document.getElementById('letter_count');
    var form = document.getElementById('text-form');
    var max_string_length = 255;
    
    text_input.setAttribute('maxlength', max_string_length);
    text_input.addEventListener('keyup',count_chars,false);
    
    form.addEventListener('submit',function(e){
        e.preventDefault()
    },false);

    function count_chars(e){
        var value = this.value
        var value_length = value.length;
        char_counter.innerHTML = max_string_length - value_length;
        
        if(e.keyCode === 13){
            var new_item = document.createElement('li');
            console.log(document.getElementById('todo-items__list').style.height);
            new_item.className = 'todo-items__item';
            new_item.innerHTML = value;
            text_input.value = "";
            
            document.getElementById('todo-items__list').appendChild(new_item);
            char_counter.innerHTML = max_string_length;
            return false;
        }else{
            return true;
        }
    }
};

window.onload = addEventListeners;
