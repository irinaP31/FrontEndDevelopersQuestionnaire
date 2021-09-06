import {FormControl} from '@angular/forms'

export class MyValidators {

  static uniqueEmail(control: FormControl): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'test@test.test') {
          resolve({uniqueEmail: true});
        } else {
          resolve(null);
        }
      }, 2000);
    })
  }

}