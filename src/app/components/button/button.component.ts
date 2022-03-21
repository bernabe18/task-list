import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text:string= "";
@Input() color:string="";
//instanciamos un objeto EventEmitter que es hijo de Output
@Output() btnClick =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    // hacemos referencia al atributo btnClick y usamos un metodo llamado emit
    this.btnClick.emit();
  }


}
