import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgxApiMockConfig, NGX_API_MOCK_CONFIG } from './api-mock.config';

// TODO Readme
// TODO Einabu bei traperto

@Injectable()
export class ApiMockInterceptor implements HttpInterceptor {
  constructor(
    @Inject(NGX_API_MOCK_CONFIG)
    private readonly apiMockConfig: NgxApiMockConfig
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const partFoundInUrl = this.apiMockConfig.urlParts
      .map((part) => req.url.includes(part))
      .find((result) => result === true);

    if (!partFoundInUrl) {
      return next.handle(req);
    }

    // check pattern and has the right method
    let foundRule = this.apiMockConfig.rules.find(
      (rule) =>
        rule.method &&
        rule.method === req.method &&
        !!req.url.match(`${rule.pattern}$`)
    );

    // check pattern
    if (!foundRule) {
      foundRule = this.apiMockConfig.rules.find(
        (rule) => !!req.url.match(`${rule.pattern}$`)
      );
    }

    if (!foundRule) {
      console.warn(`Missing Rule for ${req.url}`);
      return next.handle(req);
    }

    return of(new HttpResponse({ body: foundRule.response }));
  }
}
