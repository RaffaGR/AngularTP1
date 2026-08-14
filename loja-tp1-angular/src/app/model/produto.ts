export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imageUri?: string;
    promo?: boolean;
}
