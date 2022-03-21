import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Nuestra lista De Tareas';

  constructor() { }

  ngOnInit(): void {
  }
  //funcion creada por nosotros
  togglesAddTask(){
    console.log("togglesAddTask");
  }
}
