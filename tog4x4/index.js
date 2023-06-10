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
function PreviewImage({target}) {
    var oFReader = new FileReader();
    const box = target.parentElement
    console.log(box)
    const img = box.querySelector("img#uploadPreview")
    console.log(img)
    oFReader.readAsDataURL(target.files[0]);

    oFReader.onload = function (oFREvent) {
        img.src = oFREvent.target.result;
    };
};
