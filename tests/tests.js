var assert = chai.assert;

suite('Conversor temperaturas', function() {
    test('32F = 0C', function() {
        medida_in.value = "32F";
        instanciar();
        assert.deepEqual(respuesta.innerHTML, "0");
    });
    test('45C = 113.0 Farenheit', function() {
        medida_in.value = "45C";
        instanciar();
        assert.deepEqual(respuesta.innerHTML, "113");
    });
    test('5X = error', function() {
        medida_in.value = "5X";
        instanciar();
        assert.match(respuesta.innerHTML, /ERROR/);
    });
});
