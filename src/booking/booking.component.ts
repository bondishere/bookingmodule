import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: [ './booking.component.css' ]
})
export class BookingComponent implements OnInit  {
constructor(private router:Router) 
{ 

}

  ngOnInit(): void 
  {


  }
}