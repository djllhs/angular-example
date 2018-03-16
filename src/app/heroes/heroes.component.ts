import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './../mock-heroes';

@Component({
  selector: 'app-heroes', // 组件的选择器 用来在父组件的模板中匹配HTML元素的名称，以便于识别
  templateUrl: './heroes.component.html', // 组件模板文件的位置
  styleUrls: ['./heroes.component.css'] // 组件私有CSS样式表
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'djl'
  };
  heroes = HEROES;
  constructor() {
  }

  /**
   * 生命周期钩子，创建完组件后很快就会调用。可放置初始化的逻辑
   */
  ngOnInit() {
  }

}
