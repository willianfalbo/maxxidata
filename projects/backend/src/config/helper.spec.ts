import { checkConfig } from './helper';

describe('Config Helper', () => {
  describe('Unit Test CheckConfig Function', () => {
    it('Should not throw error when value is passed', () => {
      expect(() => checkConfig('dummy value')).not.toThrow(Error);
    });

    it('Should throw error when value is undefined', () => {
      expect(() => checkConfig(undefined)).toThrow(Error);
    });

    it('Should throw error when value is null', () => {
      expect(() => checkConfig(null)).toThrow(Error);
    });

    it('Should throw error when value is zero', () => {
      expect(() => checkConfig(0)).toThrow(Error);
    });

    it('Should throw error when value is empty', () => {
      expect(() => checkConfig('')).toThrow(Error);
    });
  });
});
