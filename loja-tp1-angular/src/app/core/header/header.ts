import { Component, inject, input, output } from '@angular/core';
// import { Banner } from "../banner/banner";
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../features/carrinho/services/carrinho.service';

@Component({
  selector: 'app-header',
  // imports: [Banner],
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // titulo = "Loja TP1";
  // titulo = input<string>('tst');
  titulo = input.required<string>();
  textoSobre = output<string>()
  private carrinho = inject(CarrinhoService);
  
  qtdCarrinho = this.carrinho.qtdItens;

  enviarSobre():void{
    this.textoSobre.emit(`Tecnica de programação I. \nDesenvolvido por Rafael e prof. Dourado`);
  }

  exibirMensagem(msg: string):void {
    alert(msg);
  }
}
