import { PollRequestComponent } from '../app/components/poll-request/poll-request.component';
import { PollDisplayComponent } from '../app/components/poll-display/poll-display.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pollrequest', pathMatch: 'full' },
  { path: '', redirectTo: 'pollrequest', pathMatch: 'full' },
  { path: 'polldisplay', component: PollDisplayComponent },
  { path: 'pollrequest', component: PollRequestComponent },
  { path: '**', component: PollRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
