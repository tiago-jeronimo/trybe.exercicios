// fetch('https://swapi.dev/api/people/10/')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.name);
//     });


const doGet = (url) => { 
    const promiseCallback = (resolve, reject) =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data.name))

    }
    return new Promise(promiseCallback)
}

doGet('https://swapi.dev/api/people/10/')