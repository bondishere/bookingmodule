import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: [ './addbooking.component.css' ]
})
export class AddBookingComponent implements OnInit  {

 mess:string
  errormess:string="";
  book:Booking=new Booking();

    constructor(private bookingservice: BookingServiceService) { }


  ngOnInit(): void {
  }

  createFlight()
  {
    this.fmsserv.createNewFlight(this.flig).subscribe(data=>
      {
        this.mess=data;
        this.errormess=undefined;
        alert(this.mess);
      },
      error=>
      {
        this.errormess=JSON.parse(error.error).message;
        this.mess=undefined;
        alert(this.errormess);
        // console.log("Error Occured !!!",error);
      }
      );
  }


