import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Distancia2pModule} from './distancia2p/distancia2p.module';
import {ResistenciaModule} from './resistencia/resistencia.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResistenciaModule,
    BrowserAnimationsModule,
    Distancia2pModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
