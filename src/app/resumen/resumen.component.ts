import { Component, OnInit } from '@angular/core';
import { CvmarceService } from '../services/cvmarce.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor (public cv: CvmarceService) { }

  ngOnInit(): void {
  }

}
