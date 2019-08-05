import { ServerTranslateLoader } from './server-translate.loader';

describe('ServerTranslateLoader', () => {
  let loader: ServerTranslateLoader;

  beforeEach(() => {
    loader = new ServerTranslateLoader(null, null);
  });

  it('should create', () => {
    expect(loader).toBeTruthy();
  });
});
