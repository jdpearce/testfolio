import { Group } from './group'

export class AuthService {
    static readonly $inject: string[] = ['$http'];
    constructor(private $http: ng.IHttpService) {}

    getGroups(): ng.IHttpPromise<Group[]> {
        return this.$http.get<Group[]>('/api/groups.json');
    }
}