export class ShellController {
    title: string = 'Not set';

    $onInit(): void {
        this.title = 'OnInit has been called.';
    }
}

export const ShellComponent: ng.IComponentOptions = {
    controller: ShellController,
    template: require('./shell.component.html')
};
