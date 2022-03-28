class FizzBuzz {
    generar(numero){
        if(this.esMultiploDeN(numero,3) && this.esMultiploDeN(numero, 5)){
            numero = "FizzBuzz";
        }
        if(this.esMultiploDeN(numero,3)){
            numero = "Fizz";
        }
        if(this.esMultiploDeN(numero,5)){
            numero = "Buzz"
        }
        return numero + "";
    }
    esMultiploDeN(numero, n){
        return numero % n == 0;
    }
}

export default FizzBuzz;