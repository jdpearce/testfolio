import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs'

import { NavModule } from './nav'
import { ShellModule } from './shell';
import { WelcomeModule } from './welcome';

import { AppConfig } from './app.config';

const dependencies: string[] = [
    uiRouter,
    NavModule,
    ShellModule,
    WelcomeModule
];

export const AppModule: string = angular.module('app', dependencies)
    .config(AppConfig)
    .name;