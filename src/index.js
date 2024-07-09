const init = () => {

    const inputForm = document.querySelector("form");   
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // 1st way to access input value
        //console.log(event.target.children[1].value);

        //2nd way to access input value
        const input = document.querySelector("input#searchByID");
        // console.log(input.value);

        // // fetch data based on user input
        // fetch("http://localhost:3000/movies")
        // .then((response) => response.json())
        // .then((data) => {console.log(data);});
    
        //to get single object in return i.e picking one id at time
        //using interpolation
        // fetch(`http://localhost:3000/movies/${input.value}`)
        // .then((response) => response.json())
        // .then((data) => {console.log(data)});


        // To display some retrieved data on the page. 
        //check <section id="movieDetails on HTML"
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
              const title = document.querySelector("section#movieDetails h4");
              const summary = document.querySelector("section#movieDetails p");

            // To change contents of our title and summary elements
            // by setting their innerText values
            title.innerText = data.title;
            summary.innerText = data.summary;
            });
    
    });
}

document.addEventListener('DOMContentLoaded', init);