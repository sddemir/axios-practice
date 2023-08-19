const form= document.querySelector('form');
// const input=document.querySelector('input');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const showTitle=form.elements.query.value;
    // showTitle='';
    const config = {params:{q:showTitle}};
    const res =await axios.get(`https://api.tvmaze.com/search/shows`, config);
    moreResults(res.data);
    form.elements.query.value ='';
})
const moreResults= (shows)=>{
    for(let show of shows){
        const showName= document.createElement('H1');
        showName.textContent=show.show.name;
        document.body.append(showName);
    }
}
// trying to print out a dad joke
const button=document.querySelector('#joke');

const APIsrc = async () => {
    const conf = { headers: { Accept: 'text/plain' } };
    const jokeAPI = await axios.get(`https://icanhazdadjoke.com/`);
    getJoke();
}
const getJoke= ()=>{
    const jokeText = APIsrc()
    const joke= document.createElement('LI');
    joke.append(jokeAPI);
    document.body.append(joke);
}
button.addEventListener('click', getJoke);
