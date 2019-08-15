import { OwnersModule } from './owners.module';

describe('OwnersModule', () => {
    let ownersModule: OwnersModule;

    beforeEach(() => {
        ownersModule = new OwnersModule();
    });

    it('should create an instance', () => {
        expect(ownersModule).toBeTruthy();
    });
});
