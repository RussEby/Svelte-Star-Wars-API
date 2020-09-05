const CATEGORY = {
    "films": "https://swapi.dev/api/films/",
    "people": "https://swapi.dev/api/people/",
    "planets": "https://swapi.dev/api/planets/",
    "species": "https://swapi.dev/api/species/",
    "starships": "https://swapi.dev/api/starships/",
    "vehicles": "https://swapi.dev/api/vehicles/"
};

const StarWarsStore = {
    getAllPersons: () => {
        let apicall = fetch(CATEGORY.people)
        .then(function(response) {
                if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
                });
        return apicall;
        }
};

export default StarWarsStore;