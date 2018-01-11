import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { routes } from './app.router';
import {MatTableModule} from '@angular/material/table';
import { BerandaComponent } from './beranda/beranda.component';
import { ProfilComponent } from './profil/profil.component';
import { ProgramComponent } from './program/program.component';
import { InfoComponent } from './info/info.component';
import { BeritaComponent } from './berita/berita.component';
import { ArsipComponent } from './arsip/arsip.component';
import { LainnyaComponent } from './lainnya/lainnya.component';


@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    ProfilComponent,
    ProgramComponent,
    InfoComponent,
    BeritaComponent,
    ArsipComponent,
    LainnyaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatTableModule,
    MatGridListModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
