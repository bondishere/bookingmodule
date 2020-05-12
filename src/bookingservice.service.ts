import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {BookingComponent} from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

 constructor(private http:HttpClient) { }


  AddBooking(book:booking):Observable<any>
  {
    let url="http://localhost:8207/bookings/addBooking";
    return this.http.post(url,book,{responseType:'text'});
  }
  viewAllBookings():Observable<any>
  {
    let url="http://localhost:8207/bookings/viewAllBookings";
    return this.http.get(url);
  }
  viewBookingById( bookingId:number):Observable<any>
  {
    let url="http://localhost:8207/bookings/viewBookingById/"+ bookingId;
    return this.http.get(url);
  }
  cancelBookingById(bookingId:number):Observable<any>
  {
    let url="http://localhost:8207/bookings/cancelBooking/"+bookingId;
    return this.http.delete(url, {responseType:'text'});
  }
}