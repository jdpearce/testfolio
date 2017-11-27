import * as angular from 'angular';
import 'angular-mocks';

import { AuthModule, AuthService } from '../../src/auth';

describe('Auth service', () => {
    let service: AuthService;

    beforeEach(angular.mock.module(AuthModule));

    beforeEach(inject(($injector: ng.auto.IInjectorService) => {
        service = $injector.get<AuthService>('authService');
    }));

    it('should be able to construct the service', () => {
        expect(service).toBeTruthy();
    });
});