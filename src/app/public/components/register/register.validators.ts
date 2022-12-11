import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validarQueSeanIguales(control: FormGroup): ValidationErrors | null {
    const password = control.get('password');
    const password2 = control.get('password2');

    return password?.value === password2?.value ? null : { 'noSonIguales': true };
}