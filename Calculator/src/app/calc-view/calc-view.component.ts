import { Component } from '@angular/core';
import { CalcActionsComponent } from "../calc-actions/calc-actions.component";

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
 valor1:string = ""
 valor2:string = ""
 resultado:string = ""
 
 onInputChange1(event: Event): void {
  const target = event.target as HTMLInputElement;
  this.valor1 = target.value;
 }
 onInputChange2(event: Event): void {
  const target = event.target as HTMLInputElement;
  this.valor2 = target.value;
 }
  recibirResultado(salida:any){
     this.resultado = salida
  }
  recibirBorrar(salida:any){
    this.valor1 = salida
    this.valor2 = salida
    this.resultado = salida
  }

}
