import '@emotion/react';
import {
  ColorsTypes,
  FontSizeTypes,
  FontWeightTypes,
} from './src/components/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorsTypes;
    fontWeight: FontWeightTypes;
    fontSize: FontSizeTypes;
  }
}
