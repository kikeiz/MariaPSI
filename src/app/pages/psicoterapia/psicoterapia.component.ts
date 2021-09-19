import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-psicoterapia',
  templateUrl: './psicoterapia.component.html',
  styleUrls: ['./psicoterapia.component.scss']
})
export class PsicoterapiaComponent implements OnInit {

  constructor() { }

  public therapies = [
    {
      name:"TERAPIAS CENTRADAS EN SOLUCIONES (TCS)"
    },
    {
      name:"TERAPIA COGNITIVO CONDUCTUAL"
    },
    {
      name:"MINDFULNESS"
    },
    {
      name:"EMDR"
    },
    {
      name: "TERAPIA CENTRADA EN EMOCIONES"
    },
    {
      name: "TERAPIA PSICOANALITICA"
    }
  ]

  public services = [
    {
      title: "Trastornos de la Conducta Alimentaria",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con el Trastorno de la Conducta Alimentaria:</p><p> <ul> <li>Preocupación constante por tu cuerpo e imagen.</li> <li>Hacer dieta de forma reiterada.</li> <li>Pesarte con frecuencia.</li> <li>Pesar y comprobar las calorías de los alimentos en cada ingesta. Has bajado drásticamente de peso en poco tiempo.</li> <li>Te sigues viendo gorda en contra de la opinión de los demás.</li> <li>Evitas comer con gente y en público.</li> <li>Tienes alimentos prohibidos que no puedes ingerir por ser hipercalóricos.</li> <li>Comes muy lento, juegas con los alimentos en el plato, los cortas en trozos muy pequeños, dejas siempre comida en el plato.</li> <li>Hiperactivas, estando en continuo movimiento y haciendo excesivo ejercicio físico.</li> <li>Te das atracones y sientes que pierdes el control.</li> <li>Te provocas el vómito después de las ingestas.</li> <li>Usas diuréticos o laxantes.</li> <li>Piensas que das asco, que no vales nada, que eres gorda y fea, que no te mereces ser respetada y tenida en cuenta.</li> </ul></p>"
    },
    {
      title: "Trastornos Depresivos",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con el Trastorno Depresivo:</p><p> <ul> <li>Te sientes muy triste de manera continuada.</li> <li>Lloras con frecuencia.</li> <li>Estás más irritable de lo habitual.</li> <li>Ya no disfrutas de auqellas actividades que antes te causaban placer.</li> <li>Pérdida de interés hacia los demás.</li> <li>Desesperanza hacia el futuro.</li> <li>Te sientes un fracaso, culpable y que mereces ser castigado.</li> <li>Prefieres aislarte a estar con gente.</li> <li>Problemas de sueño.</li> <li>Ha disminuido el deseo sexual.</li> <li>Te cuesta levantarte por las mañanas.</li> <li>Te sientes inutil o desgraciado</li> </ul></p>"
    },
    {
      title: "Trastorno de Ansiedad Generalizada",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con el Trastornos de Ansiedad Generalizada:</p><p> <ul> <li>Preocupación excesiva durante la mayor parte del tiempo.</li> <li>Anticipación de que algo malo va a ocurrir.</li> <li>Inquietud y nerviosismo.</li> <li>Dificultades de atención y concentración.</li> <li>Irritabilidad.</li> <li>Fatiga y tensión muscular.</li> <li>Dificultad para conciliar el sueño o sueño interrumpido.</li> <li>Taquicardias, hiperventilación, sensación de ahogo, temblores, sudoración.</li> </ul></p>"
    },
    {
      title: "Trastorno de Pánico",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con el Trastorno de Pánico:</p><p>Recurrentes ataques de pánico, los cuales se caracterizan por:</p><p> <ul> <li>Miedo intenso o malestar intenso, que alcanza su máxima expresión en pocos minutos.</li> <li>Taquicardia, palpitaciones.</li> <li>Sudoración.</li> <li>Temblor o sacudidas..</li> <li>Dificultad para respirar.</li> <li>Sensación de ahogo.</li> <li>Dolor en el tórax.</li> </ul></p>"
    },
    {
      title: "Agorafobia",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con la Agorafobia:</p><p>Ansiedad o miedo intenso acerca de algunas de las siguientes situaciones:</p><p> <ul> <li>Miedo o ansiedad intensa en situaciones como el uso del transporte público, en espacios abiertos, en sitios cerrados, al hacer cola o estar en medio de una multitud, al estar fuera de casa solo.</li> <li>Evitación de estas situaciones por miedo a no poder escapar o a no disponer de ayuda si aparecen síntomas de pánico u otros incapacitantes.</li> </ul></p>"
    },
    {
      title: "Fobia Específica",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con una Fobia Específica:</p><p> <ul> <li>Miedo o ansiedad intensa y desproporcionada por un objeto o situación específica (Volar, alturas, tormentas, ascensores, animales, inyecciones, ver sangre).</li> <li>El objeto o situación se evita o resiste de manera activa.</li> </ul></p>"
    },
    {
      title: "Trastorno de Ansiedad Social",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con el Trastornos de Ansiedad Social:</p><p> <ul> <li>Miedo o ansiedad intensa en una o más situaciones sociales, en las que la persona se siente observado y evaluado por los demás.</li> <li>Miedo a actuar de cierta manera o de mostrar síntomas de ansiedad delante de los demás, por la posibilidad de sentirse humillado, avergonzado y rechazado por los demás.</li> <li>Evitación y rechazo de las situaciones sociales.</li> </ul></p>"
    },
    {
      title: "Trastorno Obsesivo Compulsivo",
      content: "<p>Si te sientes identificado con algunos de los siguientes síntomas, es posible que estés presentando problemas relacionados con el Trastorno Obsesivo-Compulsivo:</p><p> <ul> <li>Presencia de obsesiones: pensamientos, imágenes o impulsos recurrentes, no deseados y que causan mucha ansiedad y malestar. La persona intenta ignorarlos o suprimirlos con otros pensamientos o actos.</li> <li>Presencia de compulsiones: comportamientos o actos mentales repetitivos que la persona realiza para calmar el pensamiento obsesivo. Se realizan para prevenir o disminuir la ansiedad, o para evitar algún suceso temido.</li> <li>Las obsesiones y compulsiones requieren mucho tiempo y causan mucho malestar.</li> </ul></p>"
    },
  ]

  ngOnInit(): void {
    AOS.init({duration: 1000})

    this.services.forEach((service:any)=>{
      service['active'] = false
    })

  }

  toggle(collapsed:boolean, service:any){
    service['active'] = collapsed
    
  }

}
