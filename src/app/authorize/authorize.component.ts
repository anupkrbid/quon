import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { SocialService } from '../services/social/social.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  response: any;
  constructor(private activatedRoute: ActivatedRoute,  private router: Router, private socialService: SocialService) { }

  ngOnInit() {
    this.response = {
      ...this.activatedRoute.snapshot.params,
      ...this.activatedRoute.snapshot.queryParams,
      fragment: this.activatedRoute.snapshot.fragment
    };

    let data;
    switch (this.activatedRoute.snapshot.params.platform) {
      case 'instagram': {
        // data = this.activatedRoute.snapshot.queryParams.code;
        localStorage.setItem('INSTAGRAM_ACCESS_TOKEN', this.activatedRoute.snapshot.fragment.split('=')[1]);
        this.router.navigate(['/dashboard']);
        break;
      }
      default: {
        data = '';
      }
    }
    // this.socialService.getAccessTokenFrom('instagram', data)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

}
