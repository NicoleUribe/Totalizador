import generar from "./Fizz.Buzz";
describe("Fizz.Buzz", () => {
    it("Devolver un '1'cuando ingrese 1", () =>{
        var res = generar(1);
        expect(res).toEqual("1");
    });    });

    describe("Fizz.Buzz", () => {
        it("Devolver un '2'cuando ingrese 2", () =>{
            var res = generar(2);
            expect(res).toEqual("2");
        });
    });
    
    describe("Fizz.Buzz", () => {
        it("Devolver un 'Fizz'cuando ingrese 3", () =>{
            var res = generar(3);
            expect(res).toEqual("Fizz");
        });
    });

    describe("Fizz.Buzz", () => {
        it("Devolver un 'Buzz'cuando ingrese 5", () =>{
            var res = generar(5);
            expect(res).toEqual("Buzz");
        });
    });

    describe("Fizz.Buzz", () => {
        it("Devolver un 'Fizz'cuando se ingrese un multiplo de 3", () =>{
            var res = generar(6);
            expect(res).toEqual("Fizz");
        });
    });