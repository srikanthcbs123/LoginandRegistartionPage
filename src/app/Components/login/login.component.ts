import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router'; //import the class and next inject in the constructor
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly userservice: UserService,
    private readonly router: Router //DepencyInjection
  ) {}

  ngOnInit(): void {}
  //In TemplateDriven forms, each field is represented as a property in the component class
  formModel = {
    UserName: '',
    Password: '',
  }; //this Formmodel object which conatins required properties for our templatedriven forms.

  onSubmit(form: NgForm) {
    debugger;
    var result = form.value;
    console.log(result);
    //SUBSCRIBE IS METHOD WHICH IS USED TO SEND THE REQUEST TO RESTAPI.
    // ONCE OBSERVABLE RETURN THE DATA.SUBSCRIBE WILL CATCH THE DATA AND PROCESS TO SUCCESS FUNCTION.
    //IF ANY ERROR OCCURED IN THE RESPONSE  IT WILL PROCESS TO ERROR FUNCTION.
    this.userservice.Login(form.value).subscribe(
      (res: any) => {
        //THIS IS ONE SUCCESS FUNCTION.HERE WE ARE PROCESSING THE SUCCESS CODE
        console.log('myresult');
        console.log(res.error_Code);
        console.log(res.error_Message);
        console.log('myresult ended');
        alert(res.error_Message);
        // this.router.navigateByUrl("/home");
        this.router.navigate(['/home', form.value.UserName]); //if you want to send the value to another page like this way we need to fallow.
      }, //SUCCESS FUNCTION END HERE
      (err) => {
        //THIS IS ONE ERROR FUNCTION.HERE IF ANY ERROR OCCURED/ERROR RELATED CODE WE ARE PROCESSING
        if (err.status == 400) {
          alert('Incorrect username or password.&Authentication failed');
          this.router.navigateByUrl('/home');
        } else console.log(err);
      } //ERROR FUNCTION ENDS HERE.
    );
  }
}
