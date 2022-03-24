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