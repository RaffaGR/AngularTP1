import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from "./core/footer/footer";
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
// import { Produto } from './model/produto';
// import { CardProduto } from "./features/produtos/card-produto/card-produto";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, /* ListaProdutos, */ RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-tp1-angular');
  sobre?: string;

  x = signal(10);
  
  receberSobre(msg: string): void{
    this.sobre = msg;
  }
}
