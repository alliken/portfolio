import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('New York Pie', 'The Best New Your pie you ever tried', 'https://i.pinimg.com/736x/4c/f8/6d/4cf86d275a4760c01c5a58fdccbf3a2b--chocolate-filling-new-york.jpg')
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
