import { browser, by, element } from 'protractor';
//在e2e/下是端到端（end-to-end）测试。 
//它们不在src/下，是因为端到端测试实际上和应用是相互独立的，
//它只适用于测试你的应用而已。 这也就是为什么它会拥有自己的tsconfig.json。
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
