/** the app is not using this component at the moment */

// Initial load of the app, checks if there are any todos in local storage.
export class Init {
    text: string;
    completed: boolean;
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No Todos found');
            return;
        } else {
            console.log('Found Todos');
        }
    }
}