import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './new-observable/new-observable.component';
import { FunctionObservableComponent } from './function-observable/function-observable.component';
import { CancellingObservableComponent } from './cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './operators-basics/operators-basics.component';
import { BufferComponent } from './pages/buffer/buffer.component';
import { PagesComponent } from './pages/pages/pages.component';
import { BufferwhenComponent } from './pages/bufferwhen/bufferwhen.component';
import { TakeComponent } from './pages/take/take.component';
import { SkipComponent } from './pages/skip/skip.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
    BufferComponent,
    PagesComponent,
    BufferwhenComponent,
    TakeComponent,
    SkipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
