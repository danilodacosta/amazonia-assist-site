import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoService } from './pages/contato/service/contato.service';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsletterComponent,
    NavBarComponent,
    SobreComponent,
    ServicosComponent,
    ContatoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    IMaskModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
