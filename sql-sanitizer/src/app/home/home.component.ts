import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormatResponse } from '../models/format-response';
import { environment } from '../../environments/environment';
import { SqlParameter } from '../models/SqlParameter';
import { FormatRequest } from '../models/format-request';
import { FormatApiService } from '../services/format-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  parameterRegex = /\@[A-Za-z0-9]*/g;

  sqlQuery: string;
  charsToRemove = '';
  reindent = true;
  indentWidth = 2;
  identifierCase = 'Default';
  keywordCase = 'Default';
  stripComments = false;

  parameter: SqlParameter[];

  casingOptions = ['Default', 'Upper', 'Lower', 'Capitalize'];

  constructor(private apiService: FormatApiService) { }

  format() {
    let charsToRemoveSplits = new Array();

    if (this.charsToRemove !== '') {
      charsToRemoveSplits = this.charsToRemove.replace(' ', '').split(',');
    }

    const body: FormatRequest = {
      sqlQuery: this.sqlQuery,
      charsToRemove: charsToRemoveSplits,
      reindent: this.reindent,
      indentWidth: this.indentWidth,
      identifierCase: this.identifierCase,
      keywordCase: this.keywordCase,
      stripComments: this.stripComments,
      parameter: this.parameter
    };

    this.apiService.format(body).subscribe(response => this.sqlQuery = response.sql);
  }

  inputChanged() {
    let m: RegExpExecArray;
    this.parameter = new Array();

    do {
      m = this.parameterRegex.exec(this.sqlQuery);

      if (m) {
        this.parameter.push(new SqlParameter(m[0]));
      }
    }
    while (m);
  }

  ngOnInit() {}
}
