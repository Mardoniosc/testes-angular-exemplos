import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogDemoComponent } from './components/blog-demo/blog-demo.component';
import { DashboardHeroComponent } from './components/TesteHero/dashboard-hero/dashboard-hero.component';
import { TitlePipe } from './pipes/title.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDemoComponent,
    DashboardHeroComponent,
    TitlePipe,
    HighlightDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
