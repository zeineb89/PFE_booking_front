import { RentingsModule } from './rentings.module';

describe('RentingsModule', () => {
    let rentingsModule: RentingsModule;

    beforeEach(() => {
        rentingsModule = new RentingsModule();
    });

    it('should create an instance', () => {
        expect(rentingsModule).toBeTruthy();
    });
});
