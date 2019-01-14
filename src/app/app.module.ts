import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TeslaRestService } from './services/tesla-rest.service';
import { PollDisplayComponent } from '../app/components/poll-display/poll-display.component';
import { PollRequestComponent } from '../app/components/poll-request/poll-request.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    PollDisplayComponent,
    PollRequestComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [TeslaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
