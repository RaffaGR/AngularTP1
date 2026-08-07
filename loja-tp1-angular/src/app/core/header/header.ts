import { Component } from '@angular/core';
import { Banner } from "../banner/banner";

@Component({
  selector: 'app-header',
  imports: [Banner],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = "Loja TP1";
}
