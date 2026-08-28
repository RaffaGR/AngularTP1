import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false);

  produtosExibidos = computed(() => this.apenasPromo() 
  ? this.produtos.filter(p => p.promo)
  : this.produtos
  ); // computed pq não quer uma lista mutavel

  alternarpromo(){
    this.apenasPromo.update(v => !v);
  }

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
      descricao: 'Continuam caras. Deus continue me livrando. Imagine o inimaginavel. Meu deus, que vida. O cara vai la e sofre uma sacanagem dessa. Ainda sai da turma.',
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
    },
    {
      id: 4,
      nome: 'Novalgina',
      preco: 2500.00,
      descricao: 'Deus esta de olho em vcs.',
      imageUri: 'images/novalgina.jpeg',
      promo: false,
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
