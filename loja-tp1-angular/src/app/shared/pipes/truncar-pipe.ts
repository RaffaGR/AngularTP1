import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar',
  pure: true,
})
export class TruncarPipe implements PipeTransform {
  transform(valor: string | null | undefined, limite = 80, reticencias = '...'): string {
    if (!valor) {
      return '';
    }

    const tamanhoLimite = Number(limite) || 0;

    if (valor.length <= tamanhoLimite) {
      return valor;
    }

    return `${valor.slice(0, tamanhoLimite).trimEnd()}${reticencias}`;
  }
}
