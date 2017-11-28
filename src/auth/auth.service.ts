import { User } from './user';

export class AuthService {

    static readonly $inject: string[] = ['$http'];
    constructor(private $http: ng.IHttpService) {}

    getCurrentUser(): ng.IHttpPromise<User> {
        return this.$http.get<User>('/api/user');
    }
}
