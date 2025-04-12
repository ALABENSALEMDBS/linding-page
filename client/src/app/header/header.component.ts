import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLinkActive,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  // isMenuOpen = false;

  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  isMobileMenuOpen = false;
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  
}
