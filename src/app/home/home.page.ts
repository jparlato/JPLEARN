import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;
  public homeText: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.homeText = 'Created by JPP for demo - click button to see action.';
  }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
  }
  onChangeText() {
    this.homeText =
      'This was changed inside the Angular component home.page.ts';
  }
}
