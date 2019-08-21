import { OwnerDetailsModule } from './owner-details.module';

describe('OwnersModule', () => {
    let ownerDetailsModule: OwnerDetailsModule;

    beforeEach(() => {
        ownerDetailsModule = new OwnerDetailsModule();
    });

    it('should create an instance', () => {
        expect(ownerDetailsModule).toBeTruthy();
    });
});
