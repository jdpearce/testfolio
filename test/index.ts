import 'core-js';

requireAll((<any>require).context('.', true, /specs?.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}
