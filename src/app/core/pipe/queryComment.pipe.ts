import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryComment'
})
export class QueryCommentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return [];
    }
    if (!args) {
      return value
    }

    args = args.toLocaleLowerCase();

    return value.filter((it: { title: string; }) => {
      return it.title.toLocaleLowerCase().includes(args);
    });
  }

}
