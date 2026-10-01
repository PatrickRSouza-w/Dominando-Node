const users = {
    admin: 'Jane',
    moderator: 'Joe',
    user: 'Billy',
}
for (let role in users) { // Itera sobre as propriedades do objeto users.
    console.log(`${users[role]} is the ${role}`)}; // Retorna "Jane is the admin", "Joe is the moderator" e "Billy is the user".

    // também é possível iterar sobre as propriedades de um objeto usando o método Object.keys() que retorna um array com as chaves do objeto, e o método forEach() que itera sobre os elementos do array.

    const roles = Object.keys(users); // Retorna um array com as chaves do objeto users.
    console.log(roles); // Retorna ["admin", "moderator", "user"].
    roles.forEach(role => { 
        console.log(role);
    })

    Object.values(users).forEach(user => { // Retorna um array com os valores do objeto users e itera sobre eles.
        console.log(user);
    }); // valores do objeto users: "Jane", "Joe" e "Billy".

    Object.entries(users).forEach(([role, user]) => { // Retorna um array com os pares chave-valor do objeto users e itera sobre eles.
        console.log(`${user} is the ${role}`);
    }); // Retorna "Jane is the admin", "Joe is the moderator" e "Billy is the user".

