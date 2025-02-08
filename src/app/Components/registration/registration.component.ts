import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private readonly userservice: UserService,
    private fb: FormBuilder
  ) {}
  formModel!: FormGroup; //create the FormGroup property.
  ngOnInit(): void {
    this.formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group(
        {
          Password: ['', [Validators.required]],
          ConfirmPassword: ['', Validators.required],
        },
        { validator: this.comparePasswords }
      ),
    });
  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (
      confirmPswrdCtrl?.errors == null ||
      'passwordMismatch' in confirmPswrdCtrl?.errors
    ) {
      if (fb.get('Password')?.value != confirmPswrdCtrl?.value)
        confirmPswrdCtrl?.setErrors({ passwordMismatch: true });
      else confirmPswrdCtrl?.setErrors(null);
    }
  }

  onSubmit() {
    debugger;
    var userName = this.formModel.value.UserName; //for debug purose each filed assign to variable
    var Email = this.formModel.value.Email; //for testing purpose i am writting this way
    var FullName = this.formModel.value.FullName;
    var password = this.formModel.value.Passwords.Password;
    console.log(userName);
    console.log(Email);
    console.log(FullName);
    console.log(password);
    var body = {
      //we need prepare th one object with your form elemts data
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
    };
    this.userservice.Register(body).subscribe(
      (
        res: any //this is success function,if data is comming from api success function will call automatically
      ) => {
        console.log('my result is:');
        console.log(res.error_Code);
        console.log(res.error_Message);
        console.log('my result ended');
        alert(res.error_Code);
        alert(res.error_Message);
        if (res.error_Code == '200') {
          this.formModel.reset(); //to clear the all the fileds with empty values.
        }
      },
      (
        err: any //this is error function.if any error ocuured from response this function will execute
      ) => {
        console.log(err);
      }
    );
  }
}
