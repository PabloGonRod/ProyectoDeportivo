import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){

  }

  navigateToPartidos(){
    this.router.navigate(['partidos'])
  }

  navigateToEquipos(){
    this.router.navigate(['equipos'])
  }

  navigateToSucesos(){
    this.router.navigate(['sucesos'])
  }

}
