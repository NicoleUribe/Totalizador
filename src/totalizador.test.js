import porcentaje_estado from "./impuestoEstado.js";
import valor_impuesto from "./valorImpuesto";
import valor_descuento from "./valorDescuento";
import porcentaje_descuento from "./porcentajeDescuento.js";


describe("valorImpuesto", () => {
it("Deberia dar el valor esperado del impuesto UT", () =>{
    const imp = valor_impuesto(150,porcentaje_estado("UT"));
    expect(imp).toEqual(9.975);
});
});

describe("valorImpuesto", () => {
    it("Deberia dar el valor esperado del impuesto NV", () =>{
        const imp = valor_impuesto(150,porcentaje_estado("NV"));
        expect(imp).toEqual(12);
    });
 });

 describe("valorImpuesto", () => {
    it("Deberia dar el valor esperado del impuesto TX", () =>{
        const imp = valor_impuesto(150,porcentaje_estado("TX"));
        expect(imp).toEqual(9.375);
    });
    });
 describe("valorImpuesto", () => {
    it("Deberia dar el valor esperado del impuesto AL", () =>{
        const imp = valor_impuesto(150,porcentaje_estado("AL"));
        expect(imp).toEqual(6);
    });
    });

 describe("valorImpuesto", () => {
    it("Deberia dar el valor esperado del impuesto CA", () =>{
        const imp = valor_impuesto(150,porcentaje_estado("CA"));
        expect(imp).toEqual(12.375);
    });
    });

describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento 1500", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("1500"));
        expect(des).toEqual(45);
    });
 });

 describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento 3500", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("3500"));
        expect(des).toEqual(75);
    });
 });

 describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento 7500", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("7500"));
        expect(des).toEqual(105);
    });
 });

 describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento 10500", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("10500"));
        expect(des).toEqual(150);
    });
 });

 describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento 30500", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("30500"));
        expect(des).toEqual(225);
    });
 });

 describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento 100", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("100"));
        expect(des).toEqual(0);
    });
 });