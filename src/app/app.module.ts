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
import { DistinctComponent } from './pages/distinct/distinct.component';
import { SampleComponent } from './pages/sample/sample.component';
import { AuditComponent } from './pages/audit/audit.component';
import { ThrotleComponent } from './pages/throtle/throtle.component';
import { FirstComponent } from './pages/first/first.component';
import { LastComponent } from './pages/last/last.component';
import { DebounceComponent } from './pages/debounce/debounce.component';
import { ElementAtComponent } from './pages/element-at/element-at.component';
import { IgnoreElementComponent } from './pages/ignore-element/ignore-element.component';
import { SingleComponent } from './pages/single/single.component';
import { MapComponent } from './pages/map/map.component';
import { AjaxComponent } from './pages/ajax/ajax.component';

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
    SkipComponent,
    DistinctComponent,
    SampleComponent,
    AuditComponent,
    ThrotleComponent,
    FirstComponent,
    LastComponent,
    DebounceComponent,
    ElementAtComponent,
    IgnoreElementComponent,
    SingleComponent,
    MapComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
