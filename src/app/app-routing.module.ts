import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: 'developers',
    loadChildren: () => import('./pages/developers/developers.module').then( m => m.DevelopersPageModule)
  },
  {
    path: 'developers/:id',
    loadChildren: () => import('./pages/developer/developer.module').then( m => m.DeveloperPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
