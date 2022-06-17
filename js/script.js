function generatePokemonCards(pokemons) {
    let html = '';

    for(let i = 0; i < pokemons.length; i++) {
        html += `<div class="col-12 col-md-6 col-lg-4 mb-5">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-column">
                            <p>Name: ${pokemons[i].name}</p>
                            <p>XP: ${pokemons[i].base_experience}</p>
                            <div>
                                <img src="${pokemons[i].sprite}">
                            </div>
                            <div>
                            <button type="button" class="btn btn-primary mx-2" onclick="prepareForm(${pokemons[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                                <button type="button" class="btn btn-danger mx-2" onclick="deletePokemon(${pokemons[i].id})">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    const container = document.getElementById('pokemons-container');
    container.innerHTML = html;
}


function getPokemons() {
    axios.get('https://pokemons-data.herokuapp.com/api/v1/pokemons')
        .then(function(response) {
            const pokemons = response.data;
            generatePokemonCards(pokemons);
        })
        .catch((error) => {
            console.log(error);
        })
}
getPokemons();

function createPokemon() {
    let name = document.getElementById('name').value;
    let base_experience = document.getElementById('base_experience').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let sprite = document.getElementById('sprite').value;

    let pokemon = {
        name: name, 
        base_experience: base_experience,
        height: height,
        weight: weight,
        sprite: sprite
    }

    axios.post('https://pokemons-data.herokuapp.com/api/v1/pokemons', pokemon)
        .then(function(response) {
            console.log(response);
            getPokemons();
        })
        .catch(function(error){
            console.log(error);
        })
}


function deletePokemon(id){
    axios.delete(`https://pokemons-data.herokuapp.com/api/v1/pokemons/${id}`)
        .then(function(response){
            console.log(response);
            getPokemons();
        })
        .catch(function(error){
            console.log(error);
        })
}

function prepareForm(id) {
    if(id) {
        axios.get(`https://pokemons-data.herokuapp.com/api/v1/pokemons/${id}`)
            .then((response)=>{
                let pokemon = response.data;
                document.getElementById('name').value = pokemon.name;
                document.getElementById('base_experience').value = pokemon.base_experience;
                document.getElementById('height').value = pokemon.height;
                document.getElementById('weight').value = pokemon.weight;
                document.getElementById('sprite').value = pokemon.sprite;
            })
            .catch((error)=>{
                console.log(error);
            })
    } else {
        document.getElementById('name').value = '';
        document.getElementById('base_experience').value = '';
        document.getElementById('height').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('sprite').value = '';
    }
}