import readLineSync from 'readline-sync'
import chalk from 'chalk'

const propriedades = []
let input = ""
 while (input !="sair"){
    propriedades.push(input)
    input = readLineSync.question(chalk.blue("insira uma propriedade do CSS")).toLocaleLowerCase()
 }

 console.log(chalk.red.italic(propriedades.sort().join("\n"))) 
Footer
