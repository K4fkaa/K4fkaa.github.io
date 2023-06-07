function b(divId) {
    const box = document.querySelector('#'+divId);
    
    if (box.style.backgroundColor === 'white') {
        box.style.backgroundColor = 'crimson';
    } else if (box.style.backgroundColor === 'crimson') {
        box.style.backgroundColor = 'lime';
    } else if (box.style.backgroundColor === 'lime') {
        box.style.backgroundColor = 'black';
    } else {
        box.style.backgroundColor = 'white';
    }
}
function show(){
    const box = document.querySelector('#hide');
    
    if (box.style.display === 'block') {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
}
