import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DataCardsComponent } from './components/data-cards/data-cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './components/chart/chart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeDialogComponent } from './pages/home/home-dialog/home-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsComponent } from './pages/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataCardsComponent,
    ChartComponent,
    HomeDialogComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NavbarComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
