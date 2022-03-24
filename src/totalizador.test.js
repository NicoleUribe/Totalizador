import porcentaje_estado from "./impuestoEstado.js";
import valor_impuesto from "./valorImpuesto";
import valor_descuento from "./valorDescuento";
import porcentaje_descuento from "./porcentajeDescuento.js";


describe("valorImpuesto", () => {
it("Deberia dar el valor esperado del impuesto", () =>{
    const imp = valor_impuesto(150,porcentaje_estado("UT"));
    expect(imp).toEqual(9.975);
});
});

describe("valorDescuento", () => {
    it("Deberia dar el valor esperado del descuento", () =>{
        const des = valor_descuento(1500,porcentaje_descuento("1500"));
        expect(des).toEqual(45);
    });
 });
