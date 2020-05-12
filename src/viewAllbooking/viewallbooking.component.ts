import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewallbooking',
  templateUrl: './viewAllBooking.component.html',
  styleUrls: [ './viewAllBooking.component.css' ]
})
export class ViewAllBookingComponent implements OnInit  {
constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
