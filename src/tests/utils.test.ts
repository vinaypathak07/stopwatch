import { getCurrentMomentMessage } from '../utils/utils';

describe('getCurrentMomentMessage()', () => {
  it('should return the moment for the passed date', () => {
    const date = new Date('July 1, 1999');
    expect(getCurrentMomentMessage(date)).toEqual('morning');
    date.setHours(date.getHours() + 5);
    expect(getCurrentMomentMessage(date)).toEqual('morning');
    date.setHours(date.getHours() + 7);
    expect(getCurrentMomentMessage(date)).toEqual('afternoon');
    date.setHours(date.getHours() + 8);
    expect(getCurrentMomentMessage(date)).toEqual('evening');
  });
  describe('morning hours', () => {
    it('checks for 1am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 01:20:00'))).toEqual('morning');
    });
    it('checks for 2am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 02:00:00'))).toEqual('morning');
    });
    it('checks for 3am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 03:00:00'))).toEqual('morning');
    });
    it('checks for 4am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 04:00:00'))).toEqual('morning');
    });
    it('checks for 10am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 10:00:00'))).toEqual('morning');
    });
    it('checks for 11am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 11:00:00'))).toEqual('morning');
    });
    it('checks for 11:59am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 11:59:00'))).toEqual('morning');
    });
  });

  describe('afternoon hours', () => {
    it('checks for 12pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 12:00:00'))).toEqual('afternoon');
    });
    it('checks for 2pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 14:00:00'))).toEqual('afternoon');
    });
    it('checks for 4am hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 16:00:00'))).toEqual('afternoon');
    });
    it('checks for 4:59pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 16:59:00'))).toEqual('afternoon');
    });
  });

  describe('evening hours', () => {
    it('checks for 06pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 18:00:00'))).toEqual('evening');
    });
    it('checks for 08pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 20:00:00'))).toEqual('evening');
    });
    it('checks for 10pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 22:00:00'))).toEqual('evening');
    });
    it('checks for 11:59pm hour', () => {
      expect(getCurrentMomentMessage(new Date('December 17, 1995 23:59:00'))).toEqual('evening');
    });
  });
});
