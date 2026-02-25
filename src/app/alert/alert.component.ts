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
   * @Output: Allows this child component to emit events to its Parent.
   * EventEmitter: The object used to payload and trigger the event.
   */
  @Output() SuccessEvent = new EventEmitter<string>();

  OnFireEvent() {
    this.SuccessEvent.emit('Success');
  }
}
