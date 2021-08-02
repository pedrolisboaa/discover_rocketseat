/* 
    Object
        *Objeto
        *Propriedade / atributos
        *Funcionalidade / métodos

        {propriedade : "valor"}
*/

const pessoa = {nome: 'Pedro',
                idade: 28,
                falar: function(){
                    console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
                }}

console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.falar()