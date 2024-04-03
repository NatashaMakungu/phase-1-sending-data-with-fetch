// Add your code here
function submitData(name, email) {
    const userDetails = {
        name: "name",
        email: "email",
    };
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userDetails)
    };
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => document.body.innerHTML = data.id)
      .catch(error => document.body.innerHTML = error.message);
}
submitData("Steve", "steve@steve.com");
