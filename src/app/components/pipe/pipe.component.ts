import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  user: User = {
    "username": "codermonkey",
    "name": "nicolò",
    "surname": "esposito", //pipe che mi mette uppercase la prima lettera
    "yob": 1999, //mettere l'età in html con pipe
    "description": "loremipsum la chiamavano bocca di rosa metteva l'amore metteva l'amore, la chiamavano bocca di rosa metteva l' amore sopra ogni cosa. Appena scese dalla stazione, nel paesino di Sant'Ilario, tutti s'accorsero con uno sguardo che non si trattava di un missionario. C'è chi l'amore lo fa per noia, chi se lo sceglie per professione, bocca di rosa ne l'uno ne l'altro, lei lo faceva per passione." //pipe per troncare la descrizione dopo 30 caratteri e metta ...
  }

  constructor(){}

}

export interface User {
  username: string
  name: string
  surname: string
  yob: number
  description: string
}



