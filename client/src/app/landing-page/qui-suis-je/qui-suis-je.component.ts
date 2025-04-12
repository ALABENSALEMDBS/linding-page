import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-qui-suis-je',
  imports: [],
  templateUrl: './qui-suis-je.component.html',
  styleUrl: './qui-suis-je.component.css'
})
export class QuiSuisJeComponent {
// Données du profil
profile = {
  name: "Yassine Ben Salem",
  title: "designer UI/UX, graphiste et créateur vidéo",
  location: "Tunisie",
  experience: "4 ans d'expérience",
  countries: ["Saudi Arabie", "France", "Portugal", "Tunisie"],
  quote: "Je transforme les idées en expériences visuelles engageantes",
  description:
    "Passionné par l'esthétique minimaliste et les expériences immersives, je conçois des interfaces modernes et des identités visuelles percutantes.",
  objective: "Créer des designs qui marquent et des expériences qui convertissent.",
}



}