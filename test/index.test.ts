import { describe, it, expect } from '@jest/globals';
import { amber } from '../src';


describe('color', function () {
    it('amber', function () {
        expect(amber[50]).toBe('#FFF8E1');
    });
});