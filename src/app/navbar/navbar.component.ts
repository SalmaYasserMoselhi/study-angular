import { Component } from '@angular/core';
// RouterLink and RouterLinkActive are needed for routerLink="..." and routerLinkActive="..." in the template.
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
