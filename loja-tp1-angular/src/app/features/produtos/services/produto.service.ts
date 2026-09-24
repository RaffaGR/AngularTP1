import { inject, Service } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class ProdutoService {
    private logger = inject(LoggerService);
    private http = inject(HttpClient);

    private apiUrl = 'https://fakestoreapi.com/products';

    /* private readonly listaMock = <Produto[]>[
        {
          id: 1,
          nome: 'Mounjaro',
          preco: 1699.99,
          descricao: 'Canetas caras demais. Deus me livre.',
          imageUri: 'images/mounjaro.jpeg',
          promo: false,
          estado: 'novo',
          categoria: 'Analtegico'
        },
        {
          id: 2,
          nome: 'Ozempic',
          preco: 1299.94,
          descricao: 'Continuam caras. Deus continue me livrando. Imagine o inimaginavel. Meu deus, que vida. O cara vai la e sofre uma sacanagem dessa. Ainda sai da turma.',
          imageUri: 'images/ozempic.jpeg',
          promo: true,
          estado: 'usado',
          categoria: 'remedio'
        },
        {
          id: 3,
          nome: 'Wegovy',
          preco: 2500.00,
          descricao: 'Misericórdia. Deus foi para floripa? 🌼',
          imageUri: 'images/wegovy.jpeg',
          promo: true,
          estado: 'esgotado',
          categoria: 'remedio'
        },
        {
          id: 4,
          nome: 'Novalgina',
          preco: 2500.00,
          descricao: 'Deus esta de olho em vcs.',
          imageUri: 'images/novalgina.jpeg',
          promo: false,
          estado: 'esgotado',
          categoria: 'remedio'
        }
      ]; */

      listar(): Observable<Produto[]> {
        this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos");
        // return of(this.listaMock).pipe(
        //     delay(250)
        // );
        return this.http.get<any[]>(this.apiUrl).pipe(
          map(lista => lista.map(prod => ProdutoMapper.fromJson(prod))),
          catchError(erro => {
            this.logger.error("[PRODUTO SERVICE] - Erro ao listar produto");
            return of([]);
          })
        )
      }

      getById(id: number): Observable<Produto | undefined/* any */>{ // vir com ele pronto, proxima semana vamos usar
        // this.logger
        // return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
        
        // EXERCICIO A8
        // pode ser feito via cache ou endpoint, vou fazer os 2 e um eu deixo comentado, via cache acho q seria lista, find na lista
        

        // tentativa do via cache: acho q ta quase
        /* return this.http.get<any[]>(this.apiUrl).pipe(
          map(lista => lista.map(prod => ProdutoMapper.fromJson(prod.find(p => p.id == id)))),
          catchError(erro => {
            this.logger.error("[PRODUTO SERVICE] - Erro ao listar produto");
            return of([]);
          })
        ) */

        // via cache tbm mas em vez de any, o Produto
        return this.http.get<Produto[]>(this.apiUrl).pipe(
          map(lista => {
            const produtoEncontrado = lista.find(p => p.id == id);
            return produtoEncontrado ? ProdutoMapper.fromJson(produtoEncontrado) : undefined;
          }),
          catchError(erro => {
            this.logger.error("[PRODUTO SERVICE] - Erro ao listar produto");
            return of(undefined);
          })
        );
      }

      criar(produto: Produto): Observable<any>{
        /* let body = {
          title: produto.nome,
          price: produto.preco,
          description: produto.descricao,
          image: produto.imageUri,
          category: produto.categoria
        } */

        return this.http.post(this.apiUrl, /* body */ ProdutoMapper.toJson(produto));
      }
}
