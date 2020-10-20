import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import { BilInfoComponent } from '../pages/bil-info/bil-info.component';
import { ForslagTilBilComponent } from '../pages/forslag-til-bil/forslag-til-bil.component';
import { ManuelComponent } from '../pages/manuel/manuel.component';
import { MinBiloekonomiComponent } from '../pages/min-biloekonomi/min-biloekonomi.component';
import { NummerpladeComponent } from '../pages/nummerplade/nummerplade.component';
import { NyBilStandardComponent } from '../pages/ny-bil-standard/ny-bil-standard.component';
import { StandardComponent } from '../pages/standard/standard.component';
import { TilfoejBilComponent } from '../pages/tilfoej-bil/tilfoej-bil.component';
import { VelkommenComponent } from '../pages/velkommen/velkommen.component';

@NgModule({
  declarations: [HomeComponent, VelkommenComponent, TilfoejBilComponent, BilInfoComponent, StandardComponent, ManuelComponent, NummerpladeComponent, NyBilStandardComponent, ForslagTilBilComponent, MinBiloekonomiComponent],
  imports: [CommonModule, KirbyModule],
})
export class HomeModule {}
