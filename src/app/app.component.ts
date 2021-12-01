import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


const schema =  [
  {
    "key": "name",
    "type": "input",
    "templateOptions": {
      "label": "Name (required)",
      "required": true
    }
  },
  {
    "key": "age",
    "type": "input",
    "templateOptions": {
      "label": "Age (min= 18, max= 40)",
      "type": "number",
      "min": 18,
      "max": 40,
      "required": true
    }
  },
  {
    "key": "password",
    "type": "input",
    "templateOptions": {
      "label": "Password (minLength = 6)",
      "type": "password",
      "required": true,
      "minLength": 6
    }
  },
  {
    "key": "comment",
    "type": "textarea",
    "templateOptions": {
      "label": "Comment (maxLength = 100)",
      "required": true,
      "maxLength": 100,
      "rows": 5
    }
  },
  {
    "key": "ip",
    "type": "input",
    "templateOptions": {
      "label": "IP Address (pattern = /(\\d{1,3}\\.){3}\\d{1,3}/)",
      "pattern": "/(\\d{1,3}\\.){3}\\d{1,3}/",
      "required": true
    },
    "validation": {
      "messages": {
        "pattern": "(error, field: FormlyFieldConfig) => `'${field.formControl.value}' is not a valid IP Address`"
      }
    }
  }
];

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

constructor(    private http: HttpClient,) { 
    this.loadExample();
  }

  loadExample() {
    debugger  ;
    this.fields = schema;
  
  }
  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */