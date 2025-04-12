import { Component, HostListener } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { QuiSuisJeComponent } from "../qui-suis-je/qui-suis-je.component";
import { MavaleurajouterComponent } from "../mavaleurajouter/mavaleurajouter.component";
import { NgIf } from '@angular/common';
import { PourquoiCestUnAtoutComponent } from "../pourquoi-cest-un-atout/pourquoi-cest-un-atout.component";
import { OffersComponent } from "../../offers/offers.component";
import { ContactComponent } from "../../contact/contact.component";
import { ServicesComponent } from "../services/services.component";
import { ConsultingComponent } from "../consulting/consulting.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { MoncvComponent } from "../moncv/moncv.component";
import { OffresHomeComponent } from "../offres-home/offres-home.component";

@Component({
  selector: 'app-accueil',
  imports: [HomeComponent, MavaleurajouterComponent, NgIf, PourquoiCestUnAtoutComponent, OffersComponent, ServicesComponent, ConsultingComponent, PortfolioComponent, MoncvComponent, OffresHomeComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  showScroll: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScroll = window.scrollY > 400; // Affiche le bouton après 200px de scroll
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
