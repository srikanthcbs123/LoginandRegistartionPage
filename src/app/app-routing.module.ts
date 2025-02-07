import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
//every route is a combination of path and componet.synatx:{path:'routepath',component:yourcomponentname}
//every componet represents one page.
const routes: Routes = [//each route is one page(for each page implementation for we need to create one component)
  {path:'',redirectTo:'/user/login',pathMatch:'full'},//if route path is empty redirect to /user/login route page.
  {path:'home',component:HomeComponent},//this is only parent and it does not having child routes.
  {path:'user',component:UserComponent,//Here user is a parent route.and it contains below children pages/Routes.
   children:[   //children routes creation  for we used childern array here.
    {path:'registartion',component:RegistrationComponent},//these are user route children pages.
    {path:'login',component:LoginComponent}//these are user route children pages.
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//routermodule.forrootmethod we need to pass the parent routes arrayobject
  exports: [RouterModule]
})
export class AppRoutingModule { }
