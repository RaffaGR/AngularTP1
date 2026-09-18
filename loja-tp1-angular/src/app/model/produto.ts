// export interface Produto {
//     id: number;
//     nome: string;
//     preco: number;
//     descricao: string;
//     imageUri?: string;
//     promo?: boolean;
//     estado?: 'novo' | 'usado' | 'esgotado';
//     categoria: string;
// }

const estados = ['novo', 'usado', 'esgotado'] as const
export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imageUri?: string;
    promo?: boolean;
    estado?: 'novo' | 'usado' | 'esgotado';
    categoria: string;
}

export class ProdutoMapper {
    static fromJson(json: any): Produto{ // static é para nao depender da instancia para usar os metodos, onde o class ProdutoMapper é o objeto que teria q ser instanciado
        let _estado = estados[Math.floor(Math.random() * estados.length)];
        return /* <Produto> */{
            id: json.id,
            nome: json.title,
            preco: json.price,
            descricao: json.description,
            imageUri: json.image,
            promo: json.id % 5 == 0 && _estado != 'esgotado',
            estado: _estado,
            categoria: '', // prof n colocou a categoria
        }
    }

    static toJson(produto: Produto): any {
        return {
            id: produto.id,
            title: produto.nome,
            price: produto.preco,
            description: produto.descricao,
            image: produto.imageUri,
            // categoria: '', // o meu seria isso
            category: 'general', // do prof
        }
    }
}