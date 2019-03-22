/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe";

// as we don't depend on any angular things here we can just test w/o any helpers for this - just by creating new Object and call method
describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
