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
  { path: 'preguntas', component: PreguntasFrecuentesComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'sobremi', component: SobreMiComponent },
  { path: 'psicoterapia', component: PsicoterapiaComponent },
  { path: 'contacto', component: ContactoComponent},
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
