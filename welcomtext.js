const welcome = (number, groupname) => {
    return `Hola @${number}. Bienvenido al grupo ${groupname} lee las reglas para no tener mal entendidos`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adios joto ni te queríamos @${number}. 👋`
}
exports.bye = bye
