/// <reference path="typings/angular2/angular2"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var angularfire_1 = require("firebase/angularfire");
var TodoApp = (function () {
    function TodoApp(angularFire) {
        this.todoService = angularFire.asArray();
        this.todoEdit = null;
    }
    TodoApp.prototype.addTodoItem = function ($event, newTodo) {
        if ($event.which == 13) {
            this.todoService.add({
                name: newTodo.value,
                completed: false
            });
            newTodo.value = '';
        }
    };
    TodoApp.prototype.toogleTodoItem = function (todo) {
        console.log(todo);
        todo.completed = !todo.completed;
        this.todoService.save(todo);
    };
    TodoApp.prototype.listTodos = function () {
        return this.todoService.list;
    };
    TodoApp.prototype.deleteTodo = function (todo) {
        this.todoService.remove(todo);
    };
    TodoApp.prototype.editTodo = function (todo) {
        this.todoEdit = todo;
    };
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'todo-app',
            appInjector: [
                angularfire_1.AngularFire,
                angular2_1.bind(Firebase).toValue(new Firebase('https://l90gyovhjiw.firebaseio-demo.com/'))
            ]
        }),
        angular2_1.View({
            templateUrl: 'todo.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [angularfire_1.AngularFire])
    ], TodoApp);
    return TodoApp;
})();
angular2_1.bootstrap(TodoApp);
//# sourceMappingURL=todo.js.map