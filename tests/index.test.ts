import { utils } from "../src";

describe('Utility Functions', () => {
  describe('isEmpty', () => {
    it('should return true for empty values', () => {
      expect(utils.isEmpty('')).toBe(true);
      expect(utils.isEmpty([])).toBe(true);
      expect(utils.isEmpty({})).toBe(true);
      expect(utils.isEmpty(null)).toBe(true);
      expect(utils.isEmpty(undefined)).toBe(true);
    });

    it('should return false for non-empty values', () => {
      expect(utils.isEmpty('hello')).toBe(false);
      expect(utils.isEmpty([1, 2, 3])).toBe(false);
      expect(utils.isEmpty({ key: 'value' })).toBe(false);
      expect(utils.isEmpty(0)).toBe(false);
      expect(utils.isEmpty(false)).toBe(false);
    });
  });

  describe('find', () => {
    const array = [1, 2, 3,4, 5];

    it('should find an element that satisfies the predicate', () => {
      expect(utils.find(array, (num) => num > 3)).toBe(4);
    });

    it('should return undefined if no element satisfies the predicate', () => {
      expect(utils.find(array, (num) => num > 10)).toBeUndefined();
    });
  });

  describe('findById', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' }
    ];

    it('should find an element by its id', () => {
      expect(utils.findById(users, 2)).toEqual({ id: 2, name: 'Bob' });
    });

    it('should return undefined if no element with the given id exists', () => {
      expect(utils.findById(users, 4)).toBeUndefined();
    });
  });

  describe('groupBy', () => {
    const users = [
      { id: 1, name: 'Alice', age: 30 },
      { id: 2, name: 'Bob', age: 25 },
      { id: 3, name: 'Charlie', age: 35 },
      { id: 4, name: 'David', age: 25 }
    ];

    it('should group elements by the specified key', () => {
      const result = utils.groupBy(users, 'age');
      expect(result).toEqual({
        '25': [
          { id: 2, name: 'Bob', age: 25 },
          { id: 4, name: 'David', age: 25 }
        ],
        '30': [{ id: 1, name: 'Alice', age: 30 }],
        '35': [{ id: 3, name: 'Charlie', age: 35 }]
      });
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate elements from an array', () => {
      expect(utils.removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with no duplicates', () => {
      expect(utils.removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });



  describe('sortBy', () => {
    const users = [
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];

    it('should sort an array of objects by the specified key', () => {
      const sorted = utils.sortBy(users, 'name');
      expect(sorted.map(u => u.name)).toEqual(['Alice', 'Bob', 'Charlie']);
    });
  });

  describe('delay', () => {
    it('should resolve after the specified delay', async () => {
      const start = Date.now();
      await utils.delay(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });
});