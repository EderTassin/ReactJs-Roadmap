const users = fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((users) => {
    users.forEach((a) => {
      console.log(a.name, " - ", a.email);
    });});
