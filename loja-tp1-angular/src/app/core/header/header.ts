import { Component, input, output } from '@angular/core';
import { Banner } from "../banner/banner";

@Component({
  selector: 'app-header',
  // imports: [Banner],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // titulo = "Loja TP1";
  // titulo = input<string>('tst');
  titulo = input.required<string>();
  textoSobre = output<string>()

  enviarSobre():void{
    this.textoSobre.emit(`Tecnica de programação I. \nDesenvolvido por Rafael e prof. Dourado`);
  }

  exibirMensagem(msg: string):void {
    alert(msg);
  }
}
