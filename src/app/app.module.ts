import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import { AuthModule } from './core/auth/auth.module';
import { HomeModule } from './home/home.module';
import { VelkommenComponent } from './pages/velkommen/velkommen.component';
import { TilfoejBilComponent } from './pages/tilfoej-bil/tilfoej-bil.component';
import { BilInfoComponent } from './pages/bil-info/bil-info.component';
import { StandardComponent } from './pages/standard/standard.component';
import { ManuelComponent } from './pages/manuel/manuel.component';
import { NummerpladeComponent } from './pages/nummerplade/nummerplade.component';
import { NyBilStandardComponent } from './pages/ny-bil-standard/ny-bil-standard.component';
import { ForslagTilBilComponent } from './pages/forslag-til-bil/forslag-til-bil.component';
import { MinBiloekonomiComponent } from './pages/min-biloekonomi/min-biloekonomi.component';

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
