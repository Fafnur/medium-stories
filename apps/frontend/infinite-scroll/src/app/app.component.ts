import { Component } from '@angular/core';

@Component({
  selector: 'medium-stories-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-infinite-scroll';

  links: { route: string; label: string }[] = [];

  content: string[] = [];

  constructor() {
    this.genContent();
    this.genLinks();
  }

  genContent(): void {
    this.content
      .push(`Deleniti dignissimos id, ipsum molestias sapiente sed sequi! Accusamus, aspernatur blanditiis consectetur consequuntur, corporis fugiat
    magni minima nam nemo officiis, pariatur recusandae sapiente unde! Ad alias animi ex exercitationem explicabo in incidunt laudantium
    maiores optio quia reprehenderit similique, sint sunt tempora velit. Animi at consectetur cum cumque doloremque dolores ea eum
    exercitationem laborum optio, sed similique suscipit, vel, voluptate voluptates. Aliquid architecto atque corporis dolorem doloremque,
    ducimus, eligendi eos est et ex fuga fugit ipsa libero maiores nostrum odio odit optio perspiciatis possimus quae quidem quod rerum
    tenetur ut vel, velit voluptatem voluptatum. Consequatur ipsa maxime perferendis quia sed veniam!`);
  }

  genLinks(): void {
    this.links.push(
      {
        route: '/',
        label: 'Interactive tutorial'
      },
      {
        route: '/',
        label: 'Nx video tutorial'
      },
      {
        route: '/',
        label: 'Nx video course'
      },
      {
        route: '/',
        label: 'Audio tutorial'
      },
      {
        route: '/',
        label: 'Music tutorial'
      },
      {
        route: '/',
        label: 'Smart course'
      }
    );
  }
}
