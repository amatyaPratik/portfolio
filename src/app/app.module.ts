import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { EducationComponent } from './education/education.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { MusicComponent } from './music/music.component';
import { ArtsComponent } from './arts/arts.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CareerComponent } from './career/career.component';
import { ImgDisplayComponent } from './shared/img-display/img-display.component';
import { LiteratureComponent } from './literature/literature.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [									
    AppComponent,
    MenuItemComponent,
    EducationComponent,
      GamesComponent,
      GameComponent,
      MusicComponent,
      ArtsComponent,
      MoviesComponent,
      MovieComponent,
      AboutMeComponent,
      CareerComponent,
      ImgDisplayComponent,
      LiteratureComponent,
      FavoritesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
