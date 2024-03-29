import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CourseReducer } from './store/reducers/course.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      course: CourseReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
