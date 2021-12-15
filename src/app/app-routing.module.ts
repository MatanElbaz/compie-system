import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImageCardDetailsComponent } from './components/image-card-details/image-card-details.component';

const routes: Routes = [
{ path: "home", component: HomeComponent },
{ path: "image-card-details/:id", component: ImageCardDetailsComponent },
{ path: "", redirectTo: "/home", pathMatch: "full" },
// { path: "**", redirectTo: '/404', pathMatch: "full" },
// { path: "404", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
