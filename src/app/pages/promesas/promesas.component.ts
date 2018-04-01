import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      (contador) => {
      console.log('Termino!!', contador);
      })
      .catch((error) => {
        console.log('error en la promesa');
      });

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
   return new Promise( (resolve, reject) => {

      let contador = 0;
        const interval = setInterval( () => {
          contador += 1;
          console.log(contador);
          if (contador === 3) {
            resolve(true);
            clearInterval(interval);
          }
        }, 1000 );
      });
  }

}
