import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxApiMockModule } from '@ngx-api-mock';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxApiMockModule.forRoot({
      urlParts: ['thorsten-rintelen.de/v1/', 'https://www.angular.io/api/v2/'],
      rules: [
        {
          pattern: 'users',
          response: [
            { id: 1, name: 'User 1' },
            { id: 2, name: 'user 2' },
          ],
        },
        {
          pattern: 'users/\\d+',
          response: 'success',
          method: 'POST',
        },
        {
          pattern: 'users/\\d+',
          response: true,
          method: 'DELETE',
        },
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
