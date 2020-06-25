describe("My fizzBuzz function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        number = new fizzBuzz();
    });
    
    describe("Checks number", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
        
        
        it("should return Buzz when called as fizzBuzz(25)", function() {
            var result = fizzBuzz(25)
            expect(result).toBe("Buzz");
        });
        
        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return a number when called as whatCanIDrink(x) if x is not divisible by 3 or 5", function() {
            var result = fizzBuzz(4)
            expect(result).not.toEqual("Fizz");
        }); 
        
        it("should return a number when called as whatCanIDrink(x) if x is not divisible by 3 or 5", function() {
            var result = fizzBuzz(8)
            expect(result).not.toEqual("Buzz");
        }); 

        it("should return a number when called as whatCanIDrink(x) if x is not divisible by 3 or 5", function() {
            var result = fizzBuzz(19)
            expect(result).not.toEqual("FizzBuzz");
        }); 
    });
});