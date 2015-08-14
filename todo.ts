/// <reference path="typings/angular2/angular2"/>

import {Component, bootstrap, View} from "angular2/angular2";

@Component({selector: 'todo-app'})
@View({templateUrl: 'todo.html'})
class TodoApp {
	
}

bootstrap(TodoApp);