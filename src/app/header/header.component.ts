import { Component } from '@angular/core';
import axios from 'axios';
import { User, Repo } from './github.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  username = '';
  repos: Repo[] = [];
  user: User | null = null;

  async getRepos() {
    const userResponse = await axios.get(
      `https://api.github.com/users/${this.username}`,
    );
    this.user = userResponse.data;
    console.log(userResponse.data);

    const response = await axios.get(
      `https://api.github.com/users/${this.username}/repos`
    );
    this.repos = response.data;
  }
}
