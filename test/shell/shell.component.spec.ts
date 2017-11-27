import * as angular from 'angular';
import 'angular-mocks';

import { ShellComponent, ShellModule, ShellController } from '../../src/shell';

describe('Shell component', () => {
    let createController: (bindings?: {}) => ShellController;

    beforeEach(angular.mock.module(ShellModule));

    beforeEach(inject(($injector: ng.auto.IInjectorService) => {
        createController = (bindings = {}) => {
            const $componentController = <ng.IComponentControllerService> $injector.get(
                '$componentController'
            );

            const defaultBindings = {};
            const locals = {};

            return <ShellController> $componentController(
                'appShell',
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