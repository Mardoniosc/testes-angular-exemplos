import { TitlePipe } from './title.pipe';

describe('TitleCasePipe', () => {

  const pipe = new TitlePipe();

  it('Transforma abc em Abc', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('Tranforma "abc def" em "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });

  it("Não tranforma 'abc' em ABC", () => {
    expect(pipe.transform('abc')).not.toBe('abc')
  })

  it("Tranforma 'ABCD ABC' em Abcd Abc", () => {
    expect(pipe.transform('ABCD ABC')).toBe('Abcd Abc')
  })

});
