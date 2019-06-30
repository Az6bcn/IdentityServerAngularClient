import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  private error: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    /* check this route when its active for the redirect-uri fragment
    for the token_id or error returned from the Authorization Server */
    if (this.activatedRoute.snapshot.fragment.indexOf('error') >= 0) {
      this.error = true;
      console.log('auth error');
    }

    this.authService.CompleteAuthentication();
    this.router.navigate(['/home']);
  }

}
