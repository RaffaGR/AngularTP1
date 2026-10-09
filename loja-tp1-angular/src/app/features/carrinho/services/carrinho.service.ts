import { computed, effect, Injectable, Service, signal } from '@angular/core';
import { ItemPedido } from '../../../model/item-pedido';
import { Produto } from '../../../model/produto';

// @Service()
@Injectable({
    providedIn: 'root',
})
export class CarrinhoService {
/*  so estranhei q ta undefined o localstored disso */
    private _liistaItens = signal<ItemPedido[]>(this._carregarProdutos());

    itens = this._liistaItens.asReadonly();
    qtdItens = computed(() => this._liistaItens().reduce((somatorio, i) => somatorio + i.quantidade, 0));
    valorTotal = computed(() => this._liistaItens().reduce((s, i) => s + i.quantidade * i.produto.preco, 0));

    constructor(){
        effect(() => {
        try {
            localStorage.setItem('loja_tp1', JSON.stringify(this._liistaItens));
        } catch (e) {
            // normalmente usamos para inserir a excessão no logger
            //ou exibir alguma mensagem de erro
        }
        });
    }

    private _carregarProdutos(): ItemPedido[] {
        try {
            const conteudo = localStorage.getItem('lojatp1_carrinho');
            if(!conteudo) 
                return [];
            const lista = JSON.parse(conteudo) as ItemPedido[];
            return lista;
        } catch (e) {
            // normalmente usamos para tratar o erro
            return [];
        }
    }

    adicionar(produto: Produto, quantidade: number = 1) {
        if(!produto) 
            return;
        const itens = this._liistaItens();
        const idx = itens.findIndex(item => item.produto.id === produto.id);
        if(idx > -1) {
            // const listaAtualizada = itens.slice(); // nao precisa do slice pq a versão tornou obsoleto
            // listaAtualizada[idx] = {...listaAtualizada[idx], quantidade: listaAtualizada[idx].quantidade + quantidade};
            // this._liistaItens.set(listaAtualizada);
            /* o problema do badge travar esta aqui */
            itens[idx] = {...itens[idx], quantidade: itens[idx].quantidade + quantidade};
            this._liistaItens.set(itens);
        } else {
            const novoProd: ItemPedido = {quantidade,produto};
            this._liistaItens.set([...itens, novoProd]);
            // this._liistaItens.set([...itens, {quantidade,produto}]);
        }
    }

    remover(id: number) {
        this._liistaItens.set(this._liistaItens().filter(i => i.produto.id !== id));
    }

    atualizarQtd(id: number, quantidade: number){
        if(quantidade <= 0){
            this.remover(id);
            return;
        }
        const itens = this._liistaItens();
        const idx = itens.findIndex(it => it.produto.id === id);
        if(idx > -1){
            // const listaAtualizada = itens.slice(); // nao precisa do slice pq a versão tornou obsoleto
            // listaAtualizada[idx] = {...listaAtualizada[idx], quantidade: quantidade};
            itens[idx] = {...itens[idx], quantidade: quantidade};
            this._liistaItens.set(itens);
        }
    }

    limpar(){
        this._liistaItens.set([]);
    }
}
