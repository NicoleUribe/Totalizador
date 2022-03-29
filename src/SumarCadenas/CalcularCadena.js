import { interpolateName } from "loader-utils";
import { parseInt } from "lodash";

class Calcular {
    Sumar(cadena){

        let resultado = cadena.split(/,/);
        var res=0;
        
        if(cadena=="")
        return res;  
        for(var cont=0; resultado[cont]<=1000 ; cont++){
            res=res + parseInt(resultado[cont]);
        };
        return res;
    } 
}
export default Calcular;