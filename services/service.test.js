const {distance,score}=require('./service');

 describe("distance", () => {
test('two numbers', () => {
    expect(distance(5, 5)).toStrictEqual(50);
  
  })
 it('not a number', () => {
    expect(()=>distance('s', 5)).toThrow();
   
  })
 })

 describe("score", () => {

it('not a correct array', () => {
    //expect(()=>score(['s', 5])).toThrow();
   expect(()=>score('s', 5)).toThrow();
  })

 })