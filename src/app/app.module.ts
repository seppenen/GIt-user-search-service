import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListfilterPipe } from './pipes/listfilter.pipe';
import { GitSearchComponent } from './components/git-search/git-search.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ListfilterPipe,
    GitSearchComponent,
    SelectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
