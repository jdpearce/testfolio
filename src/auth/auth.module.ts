import * as angular from 'angular';

import { AuthService } from './auth.service';

export const AuthModule: string = angular.module('auth', [])
    .service('authService', AuthService)
    .name;
