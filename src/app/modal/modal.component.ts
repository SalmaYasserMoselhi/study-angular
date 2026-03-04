import { Component } from '@angular/core';

// Demonstrated with @ViewChild in HomeComponent.
// The parent gets a direct reference and calls openModal() / closeModal() without @Input / @Output.
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  // The parent reads/calls this indirectly via @ViewChild — it never sets isOpen directly.
  isOpen: boolean = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
