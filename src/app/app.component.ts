import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: Observable<boolean>;
  isAuth: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loading = of(true);
    this.isAuth = of(false);

    this.authService
      .isAuthenticated()
      .pipe(first())
      .subscribe((isAuth: boolean) => {
        this.loading = of(false);
        this.isAuth = of(isAuth);

        console.log('app isauth', isAuth);

        if (!isAuth) {
          window.location.href = environment.authUrl + 'login/github';
        } else {
          this.router.navigate(['/']);
        }
      });
  }
}
