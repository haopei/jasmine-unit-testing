describe('Calculator', function() {

    // Define calc variable in this scope
    //   so specs can access it
    var calc;

    beforeEach(function() {
        // init a new instance of Calculator object
        //   before each spec
        calc = new Calculator();
    });

    it('should add two numbers', function() {
        // This scope can access calc
        //   because it was defined in the parent scope
        expect(calc.add(1,2)).toBe(3);
    });

});
