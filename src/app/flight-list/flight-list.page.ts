import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.page.html',
  styleUrls: ['./flight-list.page.scss'],
  standalone: false,
})
export class FlightListPage implements OnInit {
  capturedImage: string | undefined;

  constructor(private router: Router) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera, // Use 'CameraSource.Photos' to pick from gallery
      resultType: CameraResultType.Base64,
    });

    this.capturedImage = `data:image/jpeg;base64,${image.base64String}`;
  }

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

  ngOnInit() {}
}
