const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23',()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One Dollar should be 127.9 yens", function(){
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(8.3)).toBe(1061.5700000000002);
})

test("One Yen should be 0.8 Pounds", function(){
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(5.2)).toBe(4.16);
})