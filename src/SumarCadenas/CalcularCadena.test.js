import Calcular from "./CalcularCadena";
describe("Fizz.Buzz", () => {
            //Arrange
            const calcu = new Calcular();
    it("Devolver 0 cuando la cadena esta vacia", () =>{
        //Act
        const res=calcu.Sumar("");
        //Assert 
        expect(res).toEqual(0);
    });

    it("Devolver 2 cuando la cadena sea ¨2¨", () =>{
        //Act
        const res=calcu.Sumar("2");
        //Assert 
        expect(res).toEqual(2);
    });

    
     
});