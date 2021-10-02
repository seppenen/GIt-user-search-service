import {Component, Input, OnInit} from '@angular/core';
import {DataObj} from '../../models/models';


@Component({
  selector: 'git-result',
  templateUrl: './git-result.html',
  styleUrls: ['./git-result.css']
})
export class GitResult implements OnInit {

  @Input() searchData: DataObj

  constructor() { }

  ngOnInit(): void {
  }

  openGitProfile(item:any): void {
    window.open('http://github.com/' + item.login)
  }




}
