import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () =>
      import('../app/lazy-loaded-configurable/lazy-loaded-configurable.module').then(
        (m) => m.LazyLoadedConfigurableModule.configure({ text: 'Lazy Loaded' }),
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
