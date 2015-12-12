var assert = chai.assert;

suite('Conversor temperaturas', function() {
    test('32F = 0C', function() {
        medida_in.value = "32F";
        celsius.click();
        assert.deepEqual(respuesta.innerHTML, "Resultado: 0");
    });
    test('45C = 113.0 Farenheit', function() {
        medida_in.value = "45C";
        fahrenheit.click();
        assert.deepEqual(respuesta.innerHTML, "Resultado: 113");
    });
    test('5X = error', function() {
        medida_in.value = "5X";
        kelvin.click();
        assert.deepEqual(respuesta.innerHTML, "Resultado: undefined");
    });
});
