import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import { AuthModule } from './core/auth/auth.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KirbyModule,
    AuthModule,
    HomeModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'da-DK' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
