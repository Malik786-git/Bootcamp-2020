// GET 
// async function fetchApi(){

//     const api = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     console.log(api);
//     const json = await api.json();

//     console.log(json, "json response");
// }

// fetchApi();


// POST
async function postApi(){

    const api = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'post method learning',
            body: 'javascript',
            userid: 38
        }),
        headers: {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
    console.log(api);
    const json = await api.json();

    console.log(json, "json response");

}

postApi();