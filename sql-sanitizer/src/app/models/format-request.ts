import { SqlParameter } from './SqlParameter';

export interface FormatRequest {
  sqlQuery: string;
  charsToRemove: string[];
  reindent: boolean;
  indentWidth: number;
  identifierCase: string;
  keywordCase: string;
  stripComments: boolean;
  parameter: SqlParameter[];
}
