// DADOS
const resumo = document.querySelector('.resumo')
const title = document.querySelector('.title')
const filmeId = document.querySelector('.filmeId')
const filmeImg = document.querySelector('.filmeImg')
// FORM
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const api_key = '583ec7ffd1bd189e3a8b1a2b3f2fcd91';
const base_url = 'https://api.themoviedb.org/3/movie/';

const fetchFilme = async(filme) => {
    const ApiResponse = await fetch(`${base_url}${filme.toLowerCase()}?api_key=${api_key}`);
    if(ApiResponse.status == 200){
        const data = await ApiResponse.json();
        return data;

    }else{
        console.log('error na requesição.');
    }
}

const renderFilme = async (filme) => {

    resumo.innerHTML = 'Loading...';
    filmeId.innerHTML = '';
    filmeImg.src = '';
    const data = await fetchFilme(filme);
    if(data){
        filmeId.innerHTML = data.id;
        title.innerHTML = data.title;
        resumo.innerHTML = data.overview;
        filmeImg.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

        input.value = '';
    }else{
        filmeId.innerHTML = 'Sem resuldados';
        filmeImg.src = '';
        resumo.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderFilme(input.value);
});

// === rending films ===
const filmes = async () => {
    const lista = document.querySelector('.lista')
    const movies = await fetch(`${base_url}popular?language=pt-BR&api_key=${api_key}`);

    if(movies.status == 200){
        lista.innerHTML = '';
        const data = await movies.json();
        data.results.forEach(element => {
            let item = document.createElement('div');
            item.classList.add("item", "col-2", "mb-4");
            item.innerHTML = 
            `<img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="rounded" style="width: 100%;"></img>`
            // <h5 class="fs-6 mx-2">${element.title}</h5>
            lista.appendChild(item);
        });
    }
}

filmes();
