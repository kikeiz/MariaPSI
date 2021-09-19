import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  public bottom: boolean = false
  public questions = [
    {
      question: "¿Qué es un psicólogo?",
      answer: "<p>El psicólogo es un profesional del ámbito de la salud mental que cuenta con una capacitación y destrezas clínicas que nos ayudan mediante el aprendizaje de numerosas habilidades a enfrentar con efectividad los problemas de la vida y de salud mental.</p><p>El psicólogo es en definitiva un educador y entrenador de las habilidades de afrontamiento de las personas, capaz no solo de solucionar aquellos posibles trastornos y problemas que puedan existir en un determinado momento, sino también de entrenar a sus pacientes para la prevención de recaídas, de modo que el aprendizaje se mantenga a lo largo del tiempo.</p>",
    },
    {
      question: "¿En qué consiste la psicoterapia?",
      answer: "<p>La psicoterapia es el tratamiento que tiene como objetivo el cambio de pensamiento, emociones y conductas. Es un tratamiento de colaboración basado en la relación entre una persona y el psicólogo.</p><p>En la psicoterapia, los psicólogos aplican procedimientos científicamente válidos para la creación de hábitos o habilidades efectivas, ya que las que estamos utilizando no nos están proporcionando ese bienestar necesario.</p>",
    },
    {
      question: "¿Qué problemas puede ayudar a resolver un psicólogo?",
      answer: "<p>Los tipos de problemas por los que se demanda asistencia a un psicólogo son múltiples, desde personas con problemas depresivos y ansiosos, a personas que requieren de ayuda para un trastorno crónico que interfiere con sus vidas o su salud física. Por su parte, otros pacientes recurren al psicólogo porque están experimentando problemas a corto plazo que necesitan resolver, como por ejemplo la ansiedad que se produce ante un nuevo empleo, o personas que necesitan ayuda para gestionar el duelo de la pérdida de un ser querido.</p><p>Los psicólogos también pueden ayudar a enfrentar situaciones estresantes que imposibilitan a la persona a continuar con su vida con normalidad, así como tratamiento para pacientes con adicciones.</p>",
    },
    {
      question: "¿Cómo saber si necesito acudir a un psicólogo?",
      answer: "<p>No existe una norma general en la que se indique cuál es el momento exacto de acudir a un psicólogo para solicitar ayuda, ya que dependiendo de la persona y de la manera de gestionar su situación y necesidades variará la urgencia para acudir o no a terapia.</p><p>Sin embargo, sí que podemos decir que puede ser conveniente acudir a un psicólogo cuando detectemos que algo no va bien en el nuestro bienestar emocional, o si empezamos a observar la aparición de determinados síntomas concretos asociados, como pueden ser por ejemplo ansiedad, alteración del sueño o de la alimentación, sensación de tristeza, falta de concentración, estrés, etc.</p>",
    },
    {
      question: "¿A quién va destinada la psicoterapia?",
      answer: "<p>La psicoterapia está destinada a todas las personas, de todas las edades, sexos, culturas, etc. No obstante, es importante diferenciar de entre toda la gente que acude a terapia, a dos tipos concretos de pacientes:</p><p>Por un lado, se encuentran los pacientes con trastornos psicológicos como pueden ser, por ejemplo, trastornos de ansiedad, depresión, fobias, trastornos alimenticios como la anorexia o la bulimia, adicciones etc. En estos casos, el objetivo principal de la terapia será, en primer lugar, el control de los síntomas que presentan y el aprendizaje de estrategias y habilidades que les ayuden a prevenir la reaparición de los síntomas.</p><p>Por otro lado, la psicoterapia también va dirigida a aquellas personas que quieren mejorar su crecimiento personal así como poner solución a determinados problemas, que de una u otra manera están interfiriendo en su vida diaria. Con esto nos referimos, por ejemplo, a personas con dificultades en la adaptación a nuevas situaciones vitales, como podrían ser un duelo por el fallecimiento de un ser querido, una separación de su pareja, una adaptación a un nuevo puesto de trabajo, etc.</p>"
    },
    {
      question: "¿Cuál es la mejor terapia para mí?",
      answer: "<p>En la medida de lo posible recomendamos la terapia presencial, ya que el contacto directo con el psicólogo o psicóloga tiene muchas más ventajas, sobre todo en cuanto a lo que se refiere a la comunicación no verbal, no presente por ejemplo con la psicología online.</p><p>Dadas las diferentes necesidades de cada persona, queremos adaptarnos ofreciendo diversos servicios de psicología, tales como terapia online, terapia a domicilio y acompañamiento terapéutico.</p>"
    },
    {
      question: "¿Todo lo que hablemos en terapia es confidencial?",
      answer: "<p>Por supuesto, tal y como recoge la Ley de Protección de Datos Personales (LPD) guardaremos total confidencialidad con todo lo que se refiere a la información personal del paciente así como de cualquier dato referente a la terapia.</p>"
    },
    {
      question: "Antes de ir a terapia, ¿Puedo consultarte si tengo dudas?",
      answer: "<p>No dudes en hacerlo, estaremos encantados de atenderte en todas las cuestiones que se te planteen. </p>"
    }
  ]

  ngOnInit(): void {
    this.scrollService._bottomScroll.subscribe((bottom:boolean)=>{
      this.bottom = bottom
      console.log(44, this.bottom);
      AOS.init({duration: 0})
    })

    this.questions.forEach((question:any)=>{
      question['active'] = false
    })

    AOS.init({duration: 800})
  }

  toggle(collapsed:boolean, question:any){
    question['active'] = collapsed
    
  }

}
