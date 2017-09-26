import { AppError } from './../../common/app-error';
import { NotFoundError } from './../../common/not-found-error';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubFollowerService {

  constructor(private http: Http) { }

  getAllFollowers(url: string) {
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.HandlerError);

  }

  private HandlerError(error: Response) {
    if (error.status !== 200) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
