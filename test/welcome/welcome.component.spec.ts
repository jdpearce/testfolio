import * as angular from 'angular';
import 'angular-mocks';

import { WelcomeComponent, WelcomeModule, WelcomeController } from '../../src/welcome';

describe('Welcome component', () => {
    let createController: (bindings?: {}) => WelcomeController;

    beforeEach(angular.mock.module(WelcomeModule));

    beforeEach(inject(($injector: ng.auto.IInjectorService) => {
        createController = (bindings = {}) => {
            const $componentController = <ng.IComponentControllerService> $injector.get(
                '$componentController'
            );

            const defaultBindings = {};
            const locals = {};

            return <WelcomeController> $componentController(
                'appWelcome',
                locals,
                Object.assign({}, defaultBindings, bindings)
            );
        };
    }));

    it('should be able to create the component', () => {
        const controller = createController();

        expect(controller).toBeTruthy();
    });
});