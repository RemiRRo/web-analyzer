import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FileSizePipe } from './services/pipes/file-size.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CommonChartsComponent } from './components/common-charts/common-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FileSizePipe,
      FooterComponent,
      CommonChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
