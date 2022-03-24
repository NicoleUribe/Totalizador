function generar(num) {
    var res="";
    if(num % 3 == 0  || num == 5){
        if(num % 3 == 0)
        res=res+"Fizz";
        if(num == 5)
        res=res+"Buzz";
    }
    else
        res=res+num;
    return res;
}
export default generar;
