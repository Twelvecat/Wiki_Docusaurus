---
id: 使用 VS Code 替换 Keil5 开发 STM32
title: 🚧使用 VS Code 替换 Keil5 开发 STM32
authors: TwelveCat
sidebar_label: 🚧使用 VS Code 替换 Keil5 开发 STM32
slug: 使用 VS Code 替换 Keil5 开发 STM32
sidebar_position: 6 #根据需求自己改，或者不写自动
---

Keil5 虽比 Keil4 在界面上已经提升了许多，但是依旧缺发许多重要的功能（如代码补齐与代码高亮等）。而 VS Code 作为一个依靠插件便可以不断发展壮大的工具，也同样可以使用插件来替换掉 Keil5 的代码编辑功能。

## 效果展示

下面将分别给出同一份文件在 Keil5 和 VS Code 中的效果对比。

![Keil5 效果图](./../static/img/Keil5_VSCode/Keil5_usart.png)

可以很明显地对比出，VS Code 的使用在界面的美观上提升多大，同时 VS Code 在编辑代码时，许多提示类的工具也能有助于我们提升效率。

![VS Code 效果图](./../static/img/Keil5_VSCode/VSCode_usart.png)

同时该插件也可以直接在 VS Code 上进行 **编译** 和 **下载** ，具体的 **功能特性** 如下：
- 加载 Keil C51/ARM 项目，并以 Keil 项目资源管理器的展示方式显示项目视图
- 自动监视 keil 项目文件的变化，及时更新项目视图
- 通过调用 Keil 命令行接口实现 编译，重新编译，烧录 keil 项目
- 自动生成 c_cpp_properties.json 文件，使 C/C++ 插件的语法分析能正常进行

:::tip

上图所示的 VS Code 使用了 One Dark Pro 主题，文件图标使用了 VSCode Icons Mac，图标主题使用了 EI-Minimalist Icons，需要可以自取。

:::

## 操作流程

### 准备工作
### 开始使用
### 常用操作

## 总结

做一个简单的总结。



## 参考与致谢

- [参考 1](参考 1 的链接)
- [Keil Assistant GitHub](https://github.com/github0null/keil-assistant)

> 文章作者：**TwelveCat**  
> 原文地址：<https://wiki.twelvecat.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。