import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UserComponent } from './Components/user/user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //All parent routes will create in this module file and import this module file here.otherwise routes will not work
    FormsModule, //if you want to work with template driven forms import this FormsModule.otherwise TemplatedrivenForms will not work
    ReactiveFormsModule, //if you want to work with reactiveforms import this reactiveFormsModule.otherwise reactiveFoms will not work.
    HttpClientModule, //if you want communicate with apis we need to this httpclient module.otherwise we  can't communictae with restapi's
  ],
  providers: [], //here we will register the custom services.
  bootstrap: [AppComponent],
})
export class AppModule {}
