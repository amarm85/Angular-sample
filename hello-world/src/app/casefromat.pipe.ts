import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casefromat'
})
export class CasefromatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
