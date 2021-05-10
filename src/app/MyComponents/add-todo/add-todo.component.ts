import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string | undefined;
  desc:string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.title && this.desc){

      const todo = {
        sno: 1,
        title: this.title,
        desc: this.desc,
        active: true
      }
      
      this.todoAdd.emit(todo);
      this.title="";
      this.desc="";
      alert("Your todo is added");
    }
    else{
      alert("Please fill up te fields");
    }
  }

}
