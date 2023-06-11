import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CareerComponent } from './career/career.component';
import { EducationComponent } from './education/education.component';
import { GamesComponent } from './games/games.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { ArtsComponent } from './arts/arts.component';
import { LiteratureComponent } from './literature/literature.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {path:'about-me',component:AboutMeComponent},
  {path:'education',component:EducationComponent},
  {path:'career',component:CareerComponent}, 
  {path:'music',component:MusicComponent},
  {path:'arts',component:ArtsComponent},
  {path:'literature',component:LiteratureComponent},
  {
    path:'favorites',
    component:FavoritesComponent,
    children:[
      {path:'',redirectTo:'movies',pathMatch:'full'},
      {path:'movies', component:MoviesComponent},
      {path:'games', component:GamesComponent},
      {path:'music', component:MusicComponent},
    ]
  },
  {path:'**',redirectTo:'about-me'},
  {path:'',redirectTo:'about-me',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
