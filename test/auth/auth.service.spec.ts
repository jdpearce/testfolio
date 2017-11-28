import * as angular from 'angular';
import 'angular-mocks';

import { AuthModule, AuthService } from '../../src/auth';

describe('Auth service', () => {
    let service: AuthService;
    let $httpBackend: ng.IHttpBackendService;

    beforeEach(angular.mock.module(AuthModule));

    beforeEach(inject(($injector: ng.auto.IInjectorService) => {
        service = $injector.get<AuthService>('authService');
        $httpBackend = $injector.get<ng.IHttpBackendService>('$httpBackend');
    }));

    it('should call the correct api route', () => {
        $httpBackend.expectGET('/api/user').respond(200);
        service.getCurrentUser();
        $httpBackend.flush();
    });
});
