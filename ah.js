const form= document.querySelector('form');
// const input=document.querySelector('input');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const showTitle=form.elements.query.value
    console.log(showTitle);
})
