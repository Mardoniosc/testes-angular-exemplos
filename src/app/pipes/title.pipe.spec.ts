import { TitlePipe } from './title.pipe';

describe('TitleCasePipe', () => {

  const pipe = new TitlePipe();

  it('Transforma abc em Abc', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('Tranforma "abc def" em "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });
});
