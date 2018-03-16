import { Component } from '@angular/core';
/**
 * 使用HTML模板、CSS样式和单元测试定义AppComponent组件。
 * 它是根组件，随着应用的成长它会成为一棵组件树的根节点。
 * @Component 是个装饰器，用于为该组件指定Angular所需要的元数据
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '代萌萌的angular example';
}
