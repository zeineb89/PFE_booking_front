import { AddNewCarModule } from './add-new-car.module';

describe('CarsModule', () => {
    let addNewCarModule: AddNewCarModule;

    beforeEach(() => {
        addNewCarModule = new AddNewCarModule();
    });

    it('should create an instance', () => {
        expect(addNewCarModule).toBeTruthy();
    });
});
