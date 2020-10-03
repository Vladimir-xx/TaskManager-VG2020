import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';



import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AboutGuard} from './homepage/homepage.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { CardTaskComponent } from './card-task/card-task.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { InputDialogWindowComponent } from './input-dialog-window/input-dialog-window.component';






const appRoutes: Routes = [
  {path: '', component: HomepageComponent, canActivate: [AboutGuard]},
  {path: 'login', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    CardTaskComponent,
    InputDialogWindowComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule


  ],
  providers: [AboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
