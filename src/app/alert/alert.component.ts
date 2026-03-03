import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  /**
   * @Output — Child → Parent event emission.
   *
   * EventEmitter<T>: The mechanism that carries the event payload.
   * Call .emit(value) to trigger the event and send data to the parent.
   *
   * The parent listens with: (SuccessEvent)="onSuccessEvent($event)"
   *
   * Naming convention note:
   * - EventEmitter properties are typically camelCase (e.g. successEvent).
   * - PascalCase (SuccessEvent) also works but is less conventional.
   */
  @Output() SuccessEvent = new EventEmitter<string>();

  OnFireEvent() {
    this.SuccessEvent.emit('Success');
  }
}
