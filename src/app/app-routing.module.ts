import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path:'about-me',component:AboutMeComponent},
  {path:'education',component:EducationComponent},
  {path:'games',component:GamesComponent},
  {path:'music',component:MusicComponent},
  {path:'photos',component:PhotosComponent},
  {path:'movies',component:MoviesComponent},
  {path:'**',redirectTo:'about-me'},
  {path:'',redirectTo:'about-me',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
