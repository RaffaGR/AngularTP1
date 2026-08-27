import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  produtos = <Produto[]>[
    {
      id: 1,
      nome: 'Mounjaro',
      preco: 1699.99,
      descricao: 'Canetas caras demais. Deus me livre.',
      imageUri: 'images/mounjaro.jpeg',
      promo: false,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Ozempic',
      preco: 1299.94,
      descricao: 'Continuam caras. Deus continue me livrando.',
      imageUri: 'images/ozempic.jpeg',
      promo: false,
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'Wegovy',
      preco: 2500.00,
      descricao: 'Misericórdia. Deus foi para floripa? 🌼',
      imageUri: 'images/wegovy.jpeg',
      promo: true,
      estado: 'esgotado'
    }
  ];

  onViewProduct(id: number){
    alert(`Visualizando produto id: ${id}`);
  }

  onAddProduct(produto: {id: number, qtd: number}){
    alert(`Adicionado produto ${produto.id} | quantidade: ${produto.qtd}`)
  }
}
