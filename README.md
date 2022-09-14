[![bugsplat-github-banner-basic-outline](https://user-images.githubusercontent.com/20464226/149019306-3186103c-5315-4dad-a499-4fd1df408475.png)](https://bugsplat.com)
<br/>
# <div align="center">BugSplat</div> 
### **<div align="center">Crash and error reporting built for busy developers.</div>**
<div align="center">
    <a href="https://twitter.com/BugSplatCo">
        <img alt="Follow @bugsplatco on Twitter" src="https://img.shields.io/twitter/follow/bugsplatco?label=Follow%20BugSplat&style=social">
    </a>
    <a href="https://discord.gg/K4KjjRV5ve">
        <img alt="Join BugSplat on Discord" src="https://img.shields.io/discord/664965194799251487?label=Join%20Discord&logo=Discord&style=social">
    </a>
</div>

## 👋 Introduction

BugSplat's [@bugsplat/ngx-animated-counter](https://www.npmjs.com/package/@bugsplat/ngx-animated-counter) package provides simple count up and count down number animations. Take a peek our [example](https://bugsplat-git.github.io/ngx-animated-counter-example/) that demonstrates our animated counter.

## 🏗 Installation

`npm i -s @bugsplat/ngx-animated-counter`

## 🏃 Usage

Add the `NgxAnimatedCounterModule` to your module's imports:

```ts
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter'

@NgModule({
  ...
  imports: [
    NgxAnimatedCounterModule
  ],
  ...
})
```

The `ngx-animated-counter` component takes one input the properties `start` (number to being the animation), `end` (number to end the animation), `interval` (time in ms between increments), and `increment` (number to increment by each interval):

```ts
public params: NgxAnimatedCounterParams = { start: 20, end: 220, interval: 10, increment: 20 };
```

Add the counter to your component's template:

```html
<ngx-animated-counter [params]="params"></ngx-animated-counter>
```

## 🐛 About

[ngx-animated-counter](https://github.com/BugSplat-Git/ngx-animated-counter) is an open source tool from [BugSplat](https://www.bugsplat.com/)! BugSplat is a crash and error reporting tool used by developers to find when their software crashes while in use, and to collect data valuable to fixing those errors. If you're interested in error reporting, check out our [Angular](https://docs.bugsplat.com/introduction/getting-started/integrations/web/angular) integration. 

With :heart:  
BugSplat