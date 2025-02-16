import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}
  UserName: string = '';
  ngOnInit(): void {
    // syntax:
    // this.route.params.subscribe(params =>
    //   {
    //   params["parametername"]
    //   })

    this.route.params.subscribe((parms) => {
      this.UserName = parms['UserName'];
      debugger;
      alert(this.UserName);
    });
  }
}
