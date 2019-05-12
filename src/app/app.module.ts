import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedMaterialModule } from './shared/shared-material.module';
import { SupportedPlatformsComponent } from './supported-platforms/supported-platforms.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SupportedPlatformsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    SharedMaterialModule
  ],
  entryComponents: [
    SupportedPlatformsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
