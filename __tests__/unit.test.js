// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('Tests isPhoneNumber with input: (123)523-3322 to be true', () => {
    expect(functions.isPhoneNumber('(123)523-3322')).toBe(true);
})

test('Tests isPhoneNumber with input: (123) 999-3322 to be true', () => {
    expect(functions.isPhoneNumber('(123) 999-3322')).toBe(true);
})

test('Tests isPhoneNumber with input: (123)53-3322 to be false', () => {
    expect(functions.isPhoneNumber('(123)53-3322')).toBe(false);
})

test('Tests isPhoneNumber with input: 1239993322 to be false', () => {
    expect(functions.isPhoneNumber('1239993322')).toBe(false);
})


// isEmail
test('Tests isEmail with input: tim_l@rockstar.net to be true', () => {
    expect(functions.isEmail('tim_l@rockstar.net')).toBe(true);
})

test('Tests isEmail with input: scammer_man@funtimes.to to be true', () => {
    expect(functions.isEmail('scammer_man@funtimes.to')).toBe(true);
})

test('Tests isEmail with input: scammer_man@funtimes.o to be false', () => {
    expect(functions.isEmail('scammer_man@funtimes.o')).toBe(false);
})

test('Tests isEmail with input: what_the_#$!^@bad.com to be false', () => {
    expect(functions.isEmail('what_the_#$!^@bad.com')).toBe(false);
})

// isStrongPassword
test('Tests isStrongPassword with input: WhatsGoinOn to be true', () => {
    expect(functions.isStrongPassword('WhatsGoin1')).toBe(true);
})

test('Tests isStrongPassword with input: Snake_EATER to be true', () => {
    expect(functions.isStrongPassword('Snake_3ATER')).toBe(true);
})

test('Tests isStrongPassword with input: What\'sGoinOn to be false', () => {
    expect(functions.isStrongPassword('What\'sGoinOn')).toBe(false);
})

test('Tests isStrongPassword with input: Snake EATER to be false', () => {
    expect(functions.isStrongPassword('Snake EATER')).toBe(false);
})

// isDate
test('Tests isDate with input: 9/28/2021 to be true', () => {
    expect(functions.isDate('09/28/2021')).toBe(true);
})

test('Tests isDate with input: 1/1/0001 to be true', () => {
    expect(functions.isDate('1/1/0001')).toBe(true);
})

test('Tests isDate with input: 1/123/2024 to be false', () => {
    expect(functions.isDate('1/123/2024')).toBe(false);
})

test('Tests isDate with input: 9/28/21 to be false', () => {
    expect(functions.isDate('9/28/21')).toBe(false);
})

// isHexColor
test('Tests isHexColor with input: 123456 to be true', () => {
    expect(functions.isHexColor('123456')).toBe(true);
})

test('Tests isHexColor with input: FFFFFF to be true', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
})

test('Tests isHexColor with input: ABCDEG to be false', () => {
    expect(functions.isHexColor('ABCDEG')).toBe(false);
})

test('Tests isHexColor with input: A8B9C10 to be false', () => {
    expect(functions.isHexColor('A8B9C10')).toBe(false);
})