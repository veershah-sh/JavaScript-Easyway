// fetch()

fetch("https://api.github.com/users/veershah-sh")
.then((response) => {
    return response.json()
})
.then((json_data) => {
    console.log(json_data);
})
.catch((error) => {
    console.log(error);
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all