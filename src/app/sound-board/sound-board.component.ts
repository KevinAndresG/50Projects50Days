import { Component } from '@angular/core';;

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss']
})
export class SoundBoardComponent {
  playSound(e: Event) {
    const but = e.target as HTMLButtonElement
    let etiquetaAudio = document.createElement("audio")
    switch (but.innerHTML) {
      case 'Applause':
        etiquetaAudio.setAttribute("src", "./sounds/applause.mp3")
        etiquetaAudio.play()
        break;
      case 'Boo':
        etiquetaAudio.setAttribute("src", "./sounds/boo.mp3")
        etiquetaAudio.play()
        break;
      case 'Gasp':
        etiquetaAudio.setAttribute("src", "./sounds/gasp.mp3")
        etiquetaAudio.play()
        break;
      case 'Toda':
        etiquetaAudio.setAttribute("src", "./sounds/tada.mp3")
        etiquetaAudio.play()
        break;
      case 'Victory':
        etiquetaAudio.setAttribute("src", "./sounds/victory.mp3")
        etiquetaAudio.play()
        break;
      case 'Wrong':
        etiquetaAudio.setAttribute("src", "./sounds/wrong.mp3")
        etiquetaAudio.play()
        break;

      default:
        break;
    }
  }
}
