import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { ParticlesModule } from 'angular-particle';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot(),
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
