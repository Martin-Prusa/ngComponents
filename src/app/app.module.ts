import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    CollapsibleComponent,
    DropdownComponent,
    SidebarComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
