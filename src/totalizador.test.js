import { it } from "jest-circus";
import expectationResultFactory from "jest-jasmine2/build/expectationResultFactory";
import { describe } from "yargs";
import porcentaje_estado from "./impuestoEstado.js";

describe("impuestoEstado", () => {
it("deberia devolver 6.65", () =>{
    imp = porcentaje_estado("UT");
    expect(imp).toEqual(6.65);
});
});