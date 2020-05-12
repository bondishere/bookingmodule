import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent} from './booking/booking.component';
import { AddBookingComponent} from './addbooking/addbooking.component';
import { ViewBookingComponent} from './viewbooking/viewbooking.component';
import { ViewAllBookingComponent} from './viewallbooking/viewallbooking.component';
import { DeleteBookingComponent} from './deletebooking/deletebooking.component';


export const routes: Routes = [
  {path:'booking',component:BookingComponent},
  {path:'addbooking',component:AddBookingComponent},
  {path:'viewbooking',component:ViewBookingComponent},
  {path:'viewAllbooking',component:ViewAllBookingComponent},
  {path:'deletebooking',component:DeleteBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
