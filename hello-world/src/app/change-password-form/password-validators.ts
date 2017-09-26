import { FormControl, FormGroup , ValidationErrors} from '@angular/forms';

export class PasswordValidators {

    static checkOldPassword(control: FormControl): Promise<ValidationErrors | null> {

        return new Promise(
            (resolve, reject) => {
                if (control.value === '1234') {
                    resolve(null);
                } else {
                    resolve({ oldPasswordNotValid: true });
                }
            }
        );


    }

    static checkConfirmPasswordIsSameAsNewPassword(controlGroup: FormGroup): ValidationErrors | null {

        const newPassword = controlGroup.get('newPassword');
        const confirmPassword = controlGroup.get('confirmPassword');

        if (newPassword.value === confirmPassword.value) {
            return null;
        }

        return { passwordDoesNotMatch: true };


    }

}
