import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryDate'
})
export class QueryDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return [];
    }
    if (!args) {
      return value
    }

    args = args.toLocaleLowerCase();

    return value.filter((it: { createdAt: string; }) => {
      return it.createdAt.toLocaleLowerCase().includes(args);
    });
  }

}
