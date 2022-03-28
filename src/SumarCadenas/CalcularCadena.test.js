import Calcular from "./CalcularCadena";
describe("Fizz.Buzz", () => {
            //Arrange
            const calcu = new Calcular();
    it("Devolver 0 cuando la cadena est vacia", () =>{
        //Act
        const res=calcu.Sumar("");
        //Assert 
        expect(res).toEqual(0);
    }); 
});