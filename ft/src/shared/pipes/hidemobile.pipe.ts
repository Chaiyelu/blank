import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideMobile'
})

export class HideMobilePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    return value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }
}
