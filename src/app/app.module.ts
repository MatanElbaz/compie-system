import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCardDetailsComponent } from './components/image-card-details/image-card-details.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http'
import { ImageCardAllComponent } from './components/image-card-all/image-card-all.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ImageCardDetailsComponent,
    ImageCardAllComponent,
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
