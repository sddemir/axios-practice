const form= document.querySelector('form');
// const input=document.querySelector('input');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const showTitle=form.elements.query.value;
    // showTitle='';
    const res =await axios.get(`https://api.tvmaze.com/search/shows?q=${showTitle}`);
    moreResults(res.data);
})
const moreResults= (shows)=>{
    for(let show of shows){
        const showName= document.createElement('H1');
        showName.textContent=show.show.name;
        document.body.append(showName);
    }
}
