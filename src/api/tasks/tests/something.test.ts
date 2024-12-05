import { Something } from '../src/something';
import { funa } from '@oversoft/abc';

describe('Something', () => {
  it('should do something', () => {
    const som = new Something('name', 123);
    funa();
    expect(som).not.toBeNull();
  });
});
