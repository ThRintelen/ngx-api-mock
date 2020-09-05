import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxApiMockConfig, NGX_API_MOCK_CONFIG } from './api-mock.config';
import { ApiMockInterceptor } from './api-mock.interceptor';

@NgModule({
  imports: [HttpClientModule],
})
export class NgxApiMockModule {
  static forRoot(
    config: NgxApiMockConfig
  ): ModuleWithProviders<NgxApiMockModule> {
    return {
      ngModule: NgxApiMockModule,
      providers: [
        {
          provide: NGX_API_MOCK_CONFIG,
          useValue: config,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiMockInterceptor,
          multi: true,
        },
      ],
    };
  }
}
