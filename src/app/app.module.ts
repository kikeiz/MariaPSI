import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { PsicoterapiaComponent } from './pages/psicoterapia/psicoterapia.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FooterComponent } from './pages/footer/footer.component';
import {CheckboxModule} from 'primeng/checkbox';
import {GMapModule} from 'primeng/gmap';
import {ButtonModule} from 'primeng/button';
import { AgmCoreModule } from '@agm/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SobreMiComponent,
    PsicoterapiaComponent,
    TarifasComponent,
    PreguntasFrecuentesComponent,
    TestimoniosComponent,
    ContactoComponent,
    FooterComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    GMapModule,
    ButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbo5j4pTS-iDPN1yw-U49Yk1r50UQft1g'    
   }),
   FontAwesomeModule,
   AccordionModule,
   FieldsetModule,
   BrowserAnimationsModule,
   CardModule,
   PanelModule,
   TabViewModule,
   BrowserAnimationsModule,
   TableModule,
   CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
