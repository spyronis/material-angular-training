import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveNewsFormComponent } from './reactive-news-form/reactive-news-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsItemComponent } from './news-item/news-item.component';

const routes: Routes = [{ path: 'news', component: NewsListComponent },
{ path: 'news/:id', component: NewsItemComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ReactiveNewsFormComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
