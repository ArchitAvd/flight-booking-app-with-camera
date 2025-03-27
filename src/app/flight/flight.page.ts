import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
  standalone: false,
})
export class FlightPage implements OnInit {
  flight: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['data']) {
      this.flight = navigation.extras.state['data'].flight;
    } else {
      console.error('No flight data found!');
    }
  }

  bookFlight() {
    alert('Flight booked!');
  }
}
