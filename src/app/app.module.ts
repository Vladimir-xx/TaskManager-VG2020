import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AboutGuard} from './homepage/homepage.guard';
import { HomeCardComponent } from './home-card/home-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


const appRoutes: Routes = [
  {path: '', component: HomepageComponent, canActivate: [AboutGuard]},
  {path: 'login', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule

  ],
  providers: [AboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
