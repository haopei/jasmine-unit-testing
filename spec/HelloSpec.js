// This spec file describes the test suites and their expectations

// describe:suite
describe('Hello World Spec', function() {

    beforeEach(function() {
        jasmine.addMatchers({
            toBeDivisibleByTwo: function() {
                console.log(this);
                return (this.actual % 2) === 0;
            }
        });
    });

    // it:spec
    it('should print hello', function() {
        // The hi() function is found in the src folder where your app is found
        expect(hi()).toEqual('hi there');
    });

});
