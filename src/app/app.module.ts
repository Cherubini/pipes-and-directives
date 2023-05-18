import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FirstUpperPipe } from './pipes/first-upper/first-upper.pipe';
import { AgePipe } from './pipes/age/age.pipe';
import { TruncationPipe } from './pipes/truncation/truncation.pipe';

import { SpecialButtonDirective } from './directives/special-button/special-button.directive';
import { IfDirective } from './directives/if/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveComponent,
    FirstUpperPipe,
    AgePipe,
    TruncationPipe,
    SpecialButtonDirective,
    IfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
