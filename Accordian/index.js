function toggleAccordian(header){
    const item = header.parentElement;
    const content = item.querySelector('.accordian-content');

    if(item.classList.contains('accordian-active')){
        content.style.maxHeight = '0';
        content.style.paddingBottom = '0';
    }
    else{
        content.style.maxHeight = content.scrollHeight +'px';
        content.style.paddingBottom = '15px';
    }
    item.classList.toggle('accordian-active');
}
