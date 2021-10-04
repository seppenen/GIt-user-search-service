import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ExtComponent } from './components/ext/ext.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PaginationComponent,
    ExtComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
