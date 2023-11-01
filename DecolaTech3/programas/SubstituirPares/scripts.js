function substituirPares(array){
    if(!array.length) return -1
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você já é zero!!")
        }else if (array[i] % 2 === 0){
            array[i] = 0
        }
    }
    return array

}

let arr =  [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]
console.log(substituirPares([]))