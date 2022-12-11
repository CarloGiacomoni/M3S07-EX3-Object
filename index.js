let objDevInHouse = {
    plataforma: "DevInHouse",
    cursos: {
        dados: ["SQL"],
        backend: ["Java", "Spring"],
        frontend: ["Javascript", "React"]
    },
    inovacao_constante: true
};

console.log(objDevInHouse);

let objUser = {
    nome: 'Carlo',
    idade: 49,
    cidade: 'Palhoça'
};

console.log(objUser)

objUser['nome'] = 'Carlo de S. Giacomoni';

objUser['idade'] = objUser.idade.toString();

objDevInHouse['objUser'] = objUser;

console.table(objDevInHouse);
console.table(objUser);