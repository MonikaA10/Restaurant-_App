import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent {

  reservation = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: ''
  };

  onSubmit() {
    // Handle form submission logic here, such as sending the data to a server
    console.log('Reservation submitted', this.reservation);
    alert('Reservation submitted successfully!');
    // Reset the form
    this.reservation = {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: ''
    };
  }
}
