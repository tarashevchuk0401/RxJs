import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages/pages.component';
import { BufferComponent } from './pages/buffer/buffer.component';
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

const routes: Routes = [
  {path: '', component: PagesComponent },
  {path: 'pages', component: PagesComponent },
  {path: 'buffer', component: BufferComponent },
  {path: 'bufferwhen', component: BufferwhenComponent },
  {path: 'take', component: TakeComponent },
  {path: 'skip', component: SkipComponent },
  {path: 'skip', component: SkipComponent },
  {path: 'sample', component: SampleComponent },
  {path: 'distinct', component: DistinctComponent },
  {path: 'audit', component: AuditComponent },
  {path: 'throtle', component: ThrotleComponent },
  {path: 'first', component: FirstComponent },
  {path: 'last', component: LastComponent },
  {path: 'debounce', component: DebounceComponent },
  {path: 'elementAt', component: ElementAtComponent },
  {path: 'ignoreElement', component: IgnoreElementComponent },
  {path: 'single', component: SingleComponent },
  {path: 'map', component: MapComponent },
  {path: 'ajax', component: AjaxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
