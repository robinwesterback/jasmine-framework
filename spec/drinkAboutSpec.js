describe("whatCanIDrink", function() {

    beforeEach(function() {
        drink = new whatCanIDrink;
    });

    describe("Age function", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return drink toddy when called as what CanIDrink(11)", function() {
            let age = whatCanIDrink(11)
            expect(age).toBe("Drink Toddy");
        });

        it("should return drink coke when called as what CanIDrink(16)", function() {
            let age = whatCanIDrink(16)
            expect(age).toBe("Drink Coke");
        });

        it("should return drink beer when called as what CanIDrink(19)", function() {
            let age = whatCanIDrink(19)
            expect(age).toBe("Drink Beer");
        });

        it("should return drink whisky when called as what CanIDrink(67)", function() {
            let age = whatCanIDrink(67)
            expect(age).toBe("Drink Whisky");
        });

        it("should be unable to return a drink when called as whatCanIDrink(150)", function() {
            let age = whatCanIDrink(150)
            expect(age).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            let age = whatCanIDrink(10).indexOf("Drink");
            expect(age).not.toEqual(-1);
        });
    });
});