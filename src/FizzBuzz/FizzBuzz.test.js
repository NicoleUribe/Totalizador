import { beforeEach } from "jest-circus";
import FizzBuzz from "./Fizz.Buzz";
describe("Fizz.Buzz", () => {
            //Arrange
            const fb = new FizzBuzz();
    it("Devolver un '1'cuando ingrese 1", () =>{
        //Act
        const result=fb.generar(1);
        //Assert 
        expect(result).toEqual("1");
    }); 

    it("Devolver un '2'cuando ingrese 2", () =>{
            //Act
            const result=fb.generar(2);
            //Assert 
            expect(result).toEqual("2");
    }); 

    it("Devolver un 'Fizz'cuando ingrese 3", () =>{
              //Act
              const result=fb.generar(3);
              //Assert 
              expect(result).toEqual("Fizz");
    });

    it("Devolver un 'Buzz'cuando ingrese 5", () =>{
             //Act
             const result=fb.generar(5);
             //Assert 
             expect(result).toEqual("Buzz");
    });

    it("Devolver un 'Fizz'cuando se ingrese un multiplo de 3", () =>{
             //Act
             const result=fb.generar(6);
             //Assert 
             expect(result).toEqual("Fizz");
    });

    it("Devolver un 'Buzz'cuando se ingrese un multiplo de 5", () =>{
        //Act
        const result=fb.generar(10);
        //Assert 
        expect(result).toEqual("Buzz");
    });

    it("Devolver un 'FizzBuzz'cuando se ingrese un multiplo de 15", () =>{
        //Act
        const result=fb.generar(15);
        //Assert 
        expect(result).toEqual("FizzBuzz");
    });
 });

   

   