/**
 * To import any module use require('./relative path to the module') function
 */

// import module `module.exports = myCalc;`
const myLocalVariable1 = require('../src/index');

// import module `module.exports.someProperty = myCalc;`
// const myLocalVariable2 = require('./../src/index');

describe('CommonJS modules', () => {
  it('should import whole module using module.exports = myCalc;', async () => {
    const result = myLocalVariable1.sum(1, 2);
    expect(result).toBe(3);
  });

  // it('should import whole module in additional property using module.exports.myCalc = myCalc;', () => {
  //   const result = myLocalVariable2.myCalc.sum(2, 2);
  //   expect(result).toBe(4);
  // });
});


const getBigestNumber = require('../src/get-bigest-number')

describe('getBigestNumber modules', () => {
  it('should be 4;', async () => {
    const result = getBigestNumber(1, 4);
    expect(result).toBe(4);
  });

  it('should -	accepts [2-10] arguments ;', () => {
    const result = getBigestNumber(2);
    expect(result).toBe('Not enough arguments');
  });

  it('should -	accepts [2-10] arguments ;', () => {
    const result = getBigestNumber(2, 3, 4, 5, 2, 6, 7, 3, 5, 2, 6);
    expect(result).toBe('Too many arguments');
  });

  it('should -	accepts only Number arguments ;', () => {
    const result = getBigestNumber(2, 3, 4, 5, 2, 'y', 7, 3);
    expect(result).toBe('Wrong argument type');
  });
});