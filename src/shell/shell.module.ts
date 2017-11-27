import * as angular from 'angular';

import { NavModule } from '../nav';
import { ShellComponent } from './shell.component';

const dependencies: string[] = [
    NavModule
];

export const ShellModule: string = angular.module('shell', dependencies)
    .component('appShell', ShellComponent)
    .name;
