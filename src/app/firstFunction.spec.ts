import { addition } from "./firstFunction"

describe('Test Addition', () => {
    it('should add two numbers', () => {
        const result = addition(10,20);
        expect(result).toBe(30);
    })
})