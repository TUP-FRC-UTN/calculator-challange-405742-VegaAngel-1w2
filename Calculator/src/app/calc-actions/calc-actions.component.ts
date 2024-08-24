import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
  @Input() entrada1:string = ""
  @Input() entrada2:string = ""
  resul:number =0
  @Output() salida = new EventEmitter<string>()
  @Output() salida2 = new EventEmitter<string>()

  
 
  sumar(){
    this.resul = parseInt(this.entrada1) + parseInt(this.entrada2)
    this.enviarMensaje()
 
  }
  restar(){
    this.resul = parseInt(this.entrada1) - parseInt(this.entrada2)
    this.enviarMensaje()
 
  }
  multiplicar(){
    this.resul = parseInt(this.entrada1) * parseInt(this.entrada2)
    this.enviarMensaje()

  }
  dividir(){
    this.resul = parseInt(this.entrada1)/ parseInt(this.entrada2)
     this.enviarMensaje()
  }
  elevar(){
    this.resul = parseInt(this.entrada1)** parseInt(this.entrada2)
    this.enviarMensaje()
  }
  enviarBorrar(){
    this.salida2.emit("")
  }
   enviarMensaje(){
    this.salida.emit(this.resul.toString())
   }
}
  
