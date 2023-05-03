import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages/pages.component';
import { BufferComponent } from './pages/buffer/buffer.component';
import { BufferwhenComponent } from './pages/bufferwhen/bufferwhen.component';
import { TakeComponent } from './pages/take/take.component';
import { SkipComponent } from './pages/skip/skip.component';

const routes: Routes = [
  {path: '', component: PagesComponent },
  {path: 'pages', component: PagesComponent },
  {path: 'buffer', component: BufferComponent },
  {path: 'bufferwhen', component: BufferwhenComponent },
  {path: 'take', component: TakeComponent },
  {path: 'skip', component: SkipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
