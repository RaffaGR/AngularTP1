import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProdutoService } from './produto.service';

@Service()
export class CategoriaService {
    private produtoService = inject(ProdutoService);

    listar(): Observable<string[]> {
        return this.produtoService.listar().pipe(
            map(produtos => {
                const categorias: string[] = [];
                for (const p of produtos) {
                    if (!categorias.includes(p.categoria)) {
                        categorias.push(p.categoria);
                    }
                }
                return categorias;
            })
        );
    }
}