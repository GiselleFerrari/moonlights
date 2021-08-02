import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { TitleComponent } from './components/title/title.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobremiComponent,
    RecetasComponent,
    TitleComponent,
    NavComponent,
    CardComponent,
    FooterComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
