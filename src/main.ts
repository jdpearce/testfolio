import './styles.scss';

import * as angular from 'angular';

import { AppModule } from './app.module';

angular.bootstrap(document.body, [AppModule], {strictDi: true});