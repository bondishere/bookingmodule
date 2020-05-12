import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'deletebooking',
  templateUrl: './deletebooking.component.html',
  styleUrls: [ './deletebooking.component.css' ]
})
export class DeleteBookingComponent implements OnInit  {
constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
