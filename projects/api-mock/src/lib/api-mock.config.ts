import { InjectionToken } from '@angular/core';

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'UPDATE';

interface ApiMockResponse {
  pattern: string;
  response: any;
  method?: HttpMethod;
  delay?: number;
}

export interface NgxApiMockConfig {
  urlParts: string[];
  rules: ApiMockResponse[];
}

export const NGX_API_MOCK_CONFIG = new InjectionToken<NgxApiMockConfig>(
  'NGX API MOCK CONFIG'
);
