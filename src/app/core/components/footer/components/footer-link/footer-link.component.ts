import { Component, OnInit, Input } from '@angular/core';
import { Isocial } from './../../models/footer-models';

@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.scss']
})
export class FooterLinkComponent implements OnInit {

  @Input() public socialNetwork?:Isocial;

  constructor() { }

  ngOnInit(): void {
  }

}
