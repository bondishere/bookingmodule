import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: [ './viewbooking.component.css' ]
})
export class ViewBookingComponent implements OnInit  {
constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
