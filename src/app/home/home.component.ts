import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user$
    .subscribe(response => {
      this.user = response;
      this.authService.GetValues()
      .subscribe(res => console.log('res Values', res));
    });




  }

}
