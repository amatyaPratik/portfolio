import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { EducationComponent } from './education/education.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [						
    AppComponent,
    MenuItemComponent,
    EducationComponent,
      GamesComponent,
      GameComponent,
      MusicComponent,
      PhotosComponent,
      MoviesComponent,
      MovieComponent,
      AboutMeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
