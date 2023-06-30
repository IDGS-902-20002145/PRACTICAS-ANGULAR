import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Distancia2pModule} from './distancia2p/distancia2p.module';
import {ResistenciaModule} from './resistencia/resistencia.module';
import {CinepolisModule} from './cinepolis/cinepolis.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ResistenciaModule,
    Distancia2pModule,
    CinepolisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
