import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convNum'
})
export class ConvNumPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      for (let i = 0; i < value.length; i++ ) {
        if (value[i].match(/\d/g)) {
          let num: number;
          num = parseInt(value[i]);
          switch (num) {
              case 0:
                value = this.replaceAll(value, '0', ' zero');
                break;
              case 1:
                value = this.replaceAll(value, '1', ' one');
                break;
              case 2:
                value = this.replaceAll(value, '2', ' two');
                break;
              case 3:
                value = this.replaceAll(value, '3', ' three');
                break;
              case 4:
                value = this.replaceAll(value, '4', ' four');
                break;
              case 5:
                value = this.replaceAll(value, '5', ' five');
                break;
              case 6:
                value = this.replaceAll(value, '6', ' six');
                break;
              case 7:
                value = this.replaceAll(value, '7', ' seven');
                break;
              case 8:
                value = this.replaceAll(value, '8', ' eight');
                break;
              case 9:
                value = this.replaceAll(value, '9', ' nine');
                break;
              default:
              console.log('err');
            }
        }
      }

      return value;
    }
    return value;
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
