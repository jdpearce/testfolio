import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';

export function AppConfig(
    $locationProvider: ng.ILocationProvider,
    $stateProvider: StateProvider,
    $urlRouterProvider: UrlRouterProvider
) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider
        .otherwise('/welcome');

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            component: 'appWelcome'
        });
}
AppConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
