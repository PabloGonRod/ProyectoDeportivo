import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent {

  constructor(private router: Router){}

  navigateToMod(){
    this.router.navigate(['mod'])
  }


}
