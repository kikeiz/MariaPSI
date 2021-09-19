import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { PsicoterapiaComponent } from './pages/psicoterapia/psicoterapia.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'preguntas', component: PreguntasFrecuentesComponent , data: {animation: 'QuestionPage'}},
  { path: 'testimonios', component: TestimoniosComponent, data: {animation: 'TestimoniosPage'}},
  { path: 'tarifas', component: TarifasComponent, data: {animation: 'TarifasPage'}},
  { path: 'sobremi', component: SobreMiComponent, data: {animation: 'AboutMePage'}},
  { path: 'psicoterapia', component: PsicoterapiaComponent, data: {animation: 'PsychotherapyPage'}},
  { path: 'contacto', component: ContactoComponent, data: {animation: 'ContactPage'}},
    {
      path: 'avisolegal',
      component: AvisoLegalComponent
    },
    {
      path: 'politicaprivacidad',
      component: PoliticaPrivacidadComponent
    }
] 



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
