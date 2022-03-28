import { parseInt } from "lodash";

class Calcular {
    Sumar(cadena){
        if(cadena=="")
        return 0;  
        return parseInt(cadena);
    }
    
}

export default Calcular;