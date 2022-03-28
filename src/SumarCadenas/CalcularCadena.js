import { interpolateName } from "loader-utils";
import { parseInt } from "lodash";

class Calcular {
    Sumar(cadena){
        let cad = cadena;
        let excepcion = cadena.split(/,/);
        var res=0;
        if(cadena=="")
        return res;  
        for(var cont=0; excepcion[cont] ; cont++){
            res=res + parseInt(excepcion[cont]);
        };
        return res;
    }
    
}

export default Calcular;