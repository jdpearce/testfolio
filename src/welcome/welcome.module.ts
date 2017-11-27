import * as angular from 'angular';

import { WelcomeComponent } from './welcome.component';

const dependencies: string[] = [];

export const WelcomeModule: string = angular.module('welcome', dependencies)
    .component('appWelcome', WelcomeComponent)
    .name;
