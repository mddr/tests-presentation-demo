import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImplementationDetailsComponent } from './implementation-details/implementation-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, ImplementationDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'impl-details', component: ImplementationDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
