import { LanguageLabelPipe } from './localize.pipe';

describe('LanguageLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new LanguageLabelPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform() should return full label for language', () => {
    const pipe = new LanguageLabelPipe();
    const lang = 'ru';
    expect(pipe.transform(lang)).toBe(`${LanguageLabelPipe.prefix}${lang}`);
  });
});
