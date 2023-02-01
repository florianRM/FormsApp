import { Component, OnInit } from '@angular/core';

interface Menu {
  title: string,
  link: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

  constructor() { }

  templateMenu: Menu[] = [
    {
      title: 'Basicos',
      link: '/template/basicos'
    },
    {
      title: 'Dinamicos',
      link: '/template/dinamicos'
    },
    {
      title: 'Switches',
      link: '/template/switches'
    }
  ]

  reactiveMenu: Menu[] = [
    {
      title: 'Basicos',
      link: '/reactive/basicos'
    },
    {
      title: 'Dinamicos',
      link: '/reactive/dinamicos'
    },
    {
      title: 'Switches',
      link: '/reactive/switches'
    }
  ]
}
