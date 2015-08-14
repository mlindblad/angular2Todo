/// <reference path="typings/angular2/angular2"/>

import {Component, bootstrap, View, bind, NgFor} from "angular2/angular2";
import {AngularFire, FirebaseArray} from "firebase/angularfire"

@Component({
	selector: 'todo-app',
	appInjector: [
    	AngularFire,
    	bind(Firebase).toValue(new Firebase('https://l90gyovhjiw.firebaseio-demo.com/'))
  	]
})
@View({
	templateUrl: 'todo.html',
	directives: [NgFor]
	
	})
class TodoApp {
	
	todoService: FirebaseArray;
	todoEdit: any;
	
	constructor(angularFire: AngularFire) {
		this.todoService = angularFire.asArray();
		this.todoEdit = null;
	}
	
	addTodoItem($event, newTodo) {
		if($event.which == 13) {
			this.todoService.add({
				name: newTodo.value,
				completed: false
			});
			newTodo.value = '';
		}
	}
	
	toogleTodoItem(todo) {
		console.log(todo);
		todo.completed = !todo.completed
		this.todoService.save(todo);
	}
	
	listTodos() {
		return this.todoService.list;
	}
	
	deleteTodo(todo) {
		this.todoService.remove(todo);
	}
	
	editTodo(todo) {
		this.todoEdit = todo;
	}
}

bootstrap(TodoApp);