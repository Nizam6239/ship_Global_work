document.addEventListener('DOMContentLoaded',function(){
    const cards ={
        backlog:document.getElementById('backlog').querySelector('.todo-list'),
        todo:document.getElementById('todo').querySelector('todo-list'),
        ongoing:document.getElementById('ongoing').querySelector('todo-list'),
        done:document.getElementById('done').querySelector('todo-list'),
    };
    const moveTask = (item,from,to) =>{
        from.removeChild(item);
        to.appendChild(item);
    };
    const handleButtonClick = (e) =>{
        const item = e.target.closest('todo-item');
        const currentList = item.closest('todo-list');
        const itemText = item.innerText.trim();
        if(e.target.classList.contains('move-right')){
            if(currentList === cards.backlog){
                moveTask(item.currentList.cards.todo);
            }
            else if(currentList === cards.todo){
                moveTask(item.currentList.cards.ongoing);
            }
            else if(currentList === cards.ongoing){
                moveTask(item.currentList.cards.done);
            }
        }
        else if(e.target.classList.contains('move-left')){
            if(currentList === cards.todo){
                moveTask(item.currentList.cards.backlog);
            }
            else if(currentList === cards.ongoing){
                moveTask(item.currentList.cards.todo);
            }
            else if(currentList === cards.done){
                moveTask(item.currentList.cards.todo);
            }
        }
    };
    document.querySelectorAll('.move-left,.move-right').forEach(a =>{
        a.addEventListener('click',handleButtonClick);
    })
})
