import { handleInput, clearInput } from '../Order.js';

describe("Tests all stages of an order", function () {
    beforeEach(function () {
        clearInput();
    });

    it("test welcome", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Omar's Burger Hut.");
    });

    it("test first item choice", function () {
        handleInput("hello");
        const aResults = handleInput("Burger");
        expect(aResults[0]).toBe("What size Burger would you like? Small or Large?");
    });

    it("test size choice", function () {
        handleInput("hello");
        handleInput("Burger");
        const aResults = handleInput("Small");
        expect(aResults[0]).toBe("What topping would you like? Mushroom, Tomato, or Onions?");
    });

    it("test topping choice", function () {
        handleInput("hello");
        handleInput("Burger");
        handleInput("Small");
        const aResults = handleInput("Mushroom");
        expect(aResults[0]).toBe("Added Small Burger with Mushroom.");
    });

    it("test second item", function () {
        handleInput("hello");
        handleInput("Burger");
        handleInput("Small");
        handleInput("Mushroom");
        const aResults = handleInput("yes");
        expect(aResults[0]).toBe("Would you like a Burger or Pizza?");
    });

    it("test upsell", function () {
        handleInput("hello");
        handleInput("Burger");
        handleInput("Small");
        handleInput("Mushroom");
        const aResults = handleInput("no");
        expect(aResults[0]).toBe("Would you like a drink with that?");
    });
});