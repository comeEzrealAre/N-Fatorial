console.log('numero fatorial\n\de 5')



const fatorial = (num)=>{
    if(num === 0) {
        return 1
    }

    return num * fatorial (num - 1)
    
}

const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)