import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.page.html',
  styleUrls: ['./flight-list.page.scss'],
  standalone: false,
})
export class FlightListPage implements OnInit {
  
  constructor(private router: Router){}
   

  flights = [
    {
      airline: 'Air India',
      from: 'Delhi',
      to: 'New York',
      time: '2025-03-10 08:00',
      price: 55000,
      id: 1,
    },
    {
      airline: 'IndiGo',
      from: 'Mumbai',
      to: 'London',
      time: '2025-03-15 10:00',
      price: 45000,
      id: 2,
    },
    {
      airline: 'Emirates',
      from: 'Chennai',
      to: 'Dubai',
      time: '2025-03-20 12:00',
      price: 25000,
      id: 3,
    },
  ];

  viewFlightDetails(flight: any) {
    this.router.navigate(['/flight/booking'], {
      state: { data: { flight } }, // Pass the state here
    });
  }

  openNativeFeaturesTest(){
    this.router.navigate(['/flight/native-features-test']);
  }

  ngOnInit() {}
}
