import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycomment'
})
export class MycommentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("id", args)
    if (!value) {
      return [];
    }
    if (!args) {
      return value
    }

    return value.filter((it: { user_id: number; }) => {
      return it.user_id == args;
    });
  }

}
