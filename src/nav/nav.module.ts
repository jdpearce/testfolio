import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs'

import { NavComponent } from './nav.component';

const dependencies: string[] = [
    uiRouter
];

export const NavModule: string = angular.module('nav', dependencies)
    .component('appNav', NavComponent)
    .name;
