// Teste Justa

// Dada a função chamada findAge, que recebe uma string contendo chaves e valores, onde key possui o nome de uma pessoa e value possui a idade dela, retorne a quantidade e os nomes das pessoas com idade abaixo de 29 anos, conforme exemplo de input e output abaixo:

/*
Input: "key: Matheus, value: 25; key: Henrique, value: 29; key: Glória, value: 21"
Output: "2 Pessoa(s): Matheus, Glória"

Input: "key: Rai, value: 65; key: Bonezi, value: 31; key: Luís, value: 22"
Output: "1 Pessoa(s): Luís"
*/

const input =
  "key: Rai, value: 65; key: Bonezi, value: 31; key: Luís, value: 22"; // Entrada de dados

let list = input.split(";"); // Separar a string em substrings, onde tiver ";", e retornar um array com as substrings

list = list.map((index) => index.trim()); // Percorrer a lista para remover os espaços no início de cada string

const newList = []; // Variável para ajudar na manipulação da lista

const output = []; // Variável para armazenar os dados de saída

/* 
Percorrer a lista com for of, para acessar cada elemento da lista,
utilização do método entries para obter o valor do índice de cada elemento
*/
for (let [index, pessoa] of list.entries()) {
  /*
    Como as chaves e valores de nome e idade ainda estavam juntos na mesma string,
    separei a string em substrings, onde tivesse ",", obtendo-se assim um array para cada pessoa,
    onde dentro desse array temos dois arrays, um com a chave e valor do nome e o outro com a chave e valor da idade
    */
  newList.push(pessoa.split(","));

  /*
    Para obter o valor da idade acessei através do index do elemento o array que possui a chave idade, 
    que está dentro do array que representa cada pessoa, dentro do array com todas as pessoas: 
        pessoas = [[[nome],[idade]], [[nome],[idade]], ...]
    E utilizei o método substring para obter apenas o valor da idade, que vem após o nome da chave "value: "
    Como estamos querendo fazer uma comparação com a idade que é um number, fiz a conversão de string para number
    */
  const age = Number(newList[index][1].substring(8));

  /*
    Fiz uma condicional para verificar se a idade era menor que 29, em caso afirmativo, 
    semelhante ao processo anterior, eu acessei o valor do nome e armazenei no array que guarda os dados de saída
    */
  if (age < 29) {
    const name = newList[index][0].substring(5);
    output.push(name);
  }
}

/*
Utilização da propriedado length para verificar quantos nomes foram armazenados no array e do método join para transformar o array em string, e separar cada elemento do array por ", "
*/
console.log(`${output.length} Pessoa(s): ${output.join(", ")}`); //Resposta
