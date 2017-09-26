
import { ValidationErrors, AbstractControl } from '@angular/forms';


export class UserNameValidators {

    static connotContainSpace(control: AbstractControl): ValidationErrors {

        if ((control.value as string).indexOf(' ') >= 0) {

            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value === 'amar') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }

            }, 2000);

        });




    }
}
