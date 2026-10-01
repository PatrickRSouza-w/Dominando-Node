fetch('https://api.demo.foo/v1/todo')// chamando a função fetch para fazer uma solicitação HTTP para a URL especificada
    .then(response => response.json()) // chamando o método .then() para lidar com a resposta da solicitação, convertendo a resposta em JSON
    .then(json => console.log(json)) // chamando o método .then() novamente para lidar com o JSON retornado, imprimindo-o no console
    .catch(error => console.log(error)); // chamando o método .catch() para lidar com qualquer erro que possa ocorrer durante a solicitação ou o processamento da resposta, imprimindo-o no console

