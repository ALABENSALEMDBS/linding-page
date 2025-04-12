import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { QuiSuisJeComponent } from "../qui-suis-je/qui-suis-je.component";

@Component({
  selector: 'app-home',
  imports: [NgFor, QuiSuisJeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  logos = [
    { name: "Xicom", imagePath: "/images/xicom.png" },
    { name: "Taqeem", imagePath: "/images/taqeem.png" },
    { name: "Go Taxi", imagePath: "/images/gotaxi.png" },
    { name: "AXESS LOGISTIQUE", imagePath: "/images/axess.png" },
    { name: "Xicom", imagePath: "/images/xicom.png" },
    { name: "Taqeem", imagePath: "/images/taqeem.png" },
    { name: "Go Taxi", imagePath: "/images/gotaxi.png" },
    { name: "AXESS LOGISTIQUE", imagePath: "/images/axess.png" },
  ]


}
