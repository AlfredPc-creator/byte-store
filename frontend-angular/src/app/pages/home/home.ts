import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Systems } from '../../components/systems/systems';
import { Services } from '../../components/services/services';
import { Companies } from '../../components/companies/companies';
import { Benefits } from '../../components/benefits/benefits';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Systems, Services, Companies, Benefits, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
