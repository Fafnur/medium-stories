import { BrowserTranslateLoader } from './browser-translate.loader';

describe('BrowserTranslateLoader', () => {
  let loader: BrowserTranslateLoader;

  beforeEach(() => {
    loader = new BrowserTranslateLoader(null, null);
  });

  it('should create', () => {
    expect(loader).toBeTruthy();
  });
});
