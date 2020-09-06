# API Mock for Angular

Mock API calls while development, testing or building an example library.
Define results based on url pattern and if needed http methods.

## Installation

`npm install ngx-api-mock --save`

## Usage

Import `NgxApiMockModule` into your app's modules:

```typescript
import { NgxApiMockModule } from '@ngx-api-mock';

@NgModule({
  imports: [
    NgxApiMockModule.forRoot(config)
  ]
})
```

## Configuration

### urlParts: `string[]`

Trigger api mock interceptor for any url wich contain on part of the list.

### rules: `{pattern: string; response: any; method?: HttpMethod;}[]`

Matching url based on pattern and if set method to return result.

### Examples

```typescript
@NgModule({
  imports: [
    NgxApiMockModule.forRoot({
      urlParts: ['thorsten-rintelen.de/v1/'],
      rules: [
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
    })
  ]
})
```
