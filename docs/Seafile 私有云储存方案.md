---
id: Seafile 私有云储存方案
title: Seafile 私有云储存方案
authors: TwelveCat
sidebar_label: Seafile 私有云储存方案
sidebar_position: 3 #根据需求自己改，或者不写自动
---

:::caution
这是一篇旧文，文章可能存在与 **[个人文档写作规范](./个人文档写作规范.md)** 相矛盾的地方。
:::

## 1 方案选择

本次私有云服务对比了几大开源方案，最终决定使用 Seafile 进行搭建，主要优点从以下几点进行考虑：

- Seafile 是源自国内清华实验室的团队开发，从 2012 年创立至今 8 年稳定运行
- Seafile 底层执行效率更高，具有更快的速度以及断点上下传等功能
- 具有完整的中文服务器管理员手册与用户手册
- 有良好的社区活跃度以及各类问题处理方案
- 加密性与安全性较好 

但是也具有最大的痛点，由于其采用了分块储存的算法，将大文件做了切割分块处理，所以当服务器数据需要备份时，我们没法直接总服务器挂载的硬盘中拿到原本真实的数据。官方已经考虑到这一点的设计，给出了各种恢复方案，但需要一定的技术手段，所以强烈建议接手此服务器管理的人，第一时间是学会如何备份与还原，解决了这个槽点之后，Seafile 还算是比较好用的（来自网友的测评）。

关于服务器系统的选择，本次选择了 Ubuntu 18.04 进行搭建，主要考虑 Ubuntu 的社区资料更全面，利于维护；还有 Seafile 官方组已经在 Ubuntu 18.04 上验证了他们服务端的功能，完全可用。

**注意：本方案以及本开发日志均基于 2020 年 11 月 9 日官方提供的手册以及网络中能搜寻到的解决方案，后续维护请以最新版 [官方手册](https://cloud.seafile.com/published/seafile-manual-cn/overview/components.md) 为准。**

## 2 Linux安装

Ubuntu 18.04 可从 [官网](https://ubuntu.com/download/desktop) 下载，下载下来会获得一个 `.iso` 镜像文件，可以使用各种工具烧录到U盘中，再安装到服务器的电脑里即可。具体实现方式多种多言，此处不展开进行对比。

这里使用了BalenaEtchar进行烧录了，因为比较好看界面，ui是王道。
<!-- 
![image-20201109165023978](../images/Seafile%E7%A7%81%E6%9C%89%E4%BA%91%E5%82%A8%E5%AD%98%E6%96%B9%E6%A1%88-1-%E5%88%9D%E5%A7%8B%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/image-20201109165023978.png) -->

简单完成烧录和系统安装后就可以开始操作了，但是由于使用的设备过老，作为台式服务器，并没有Linux下的无线网卡，这使得联网问题比较难以解决。我们采购了一个型号为TL-WN725N的无线网卡，但是也只是在Windows下免驱，这里需要寻求第三方方案进行解决。

# 3 无线网卡驱动解决方案

主要参考Github上[此方案](https://github.com/brektrou/rtl8821CU)进行。其他类似资料也有不少，但是大都过老，并不支持内核5.X版本的Linux系统，此处先进行这个方案尝试。

## 3.1 编译工具安装

编译此驱动需要安装以下工具``make gcc linux-header git``，由于主机没有网络，这里临时使用手机USB共享网络辅助安装，若又其他办法也可。

这里用万年老代码更新一下

```
sudo apt-get update
sudo apt-get upgrade
```

然后依次安装以下依赖工具包

```
sudo apt-get install ubuntu-make
sudo apt-get install git
sudo apt install build-essential
sudo apt-get install linux-headers-$(uname -r)
```

确定工具安装完毕后，可以进入到下一步。

## 3.2 克隆仓库

命令如下，直接操作，如果仓库地址更新，请联系原作者，或更改其他方案进行。

```
mkdir -p ~/build
cd ~/build
git clone https://github.com/brektrou/rtl8821CU.git
```

## 3.3 使用 DKMS 构建和安装(我用的3.4)

DKMS 是一个系统，当安装或更新新内核时，它会自动重新编译并安装内核模块。要使用 DKMS，请安装 dkms 包。

使用如下命令安装：

```
sudo apt-get install dkms
```

要使用此项目的**DKMS**功能，只需运行：

```
./dkms-install.sh
```

如果**以后**要删除它，请运行：

```
./dkms-remove.sh
```

### 将 USB-wifi 适配器插入电脑

如果可以检测到 wifi ，恭喜恭喜。如果没有，您可能需要通过终端中的以下步骤切换设备 usb 模式：

1. 按类型查找 usb - wifi 适配器设备 ID，如"0bda：1a2b"：
2. 按类型切换模式：（设备 ID 必须为你的）

```
sudo usb_modeswitch -KW -v 0bda -p 1a2b
systemctl start bluetooth.service - starting Bluetooth service if it's in inactive state
```

### 使其永久化

如果上述步骤工作正常，为了避免定期不得不使你可以使它永久 （在**Ubuntu 18.04 LTS 工作**）：`usb_modeswitch`

1. 编辑规则：`usb_modeswitch`

   ```
   sudo nano /lib/udev/rules.d/40-usb_modeswitch.rules
   ```

2. 在结束行之前追加以下内容：`LABEL="modeswitch_rules_end"`

   ```
   # Realtek 8211CU Wifi AC USB
   ATTR{idVendor}=="0bda", ATTR{idProduct}=="1a2b", RUN+="/usr/sbin/usb_modeswitch -K -v 0bda -p 1a2b"
   ```

## 3.4 无需 DKMS 即可构建和安装（我又失败了）

使用以下命令：

```
cd ~/build/rtl8821CU
make
sudo make install
```

如果你**以后**要移除，这样执行：

```
cd ~/build/rtl8821CU
sudo make uninstall
```

## 3.5 检查一下安装的设备（我懒得翻译了）

If you successfully install the driver, the driver is installed on . Check the driver with the command:`/lib/modules/<linux version>/kernel/drivers/net/wireless/realtek/rtl8821cu``ls`

```
ls /lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtl8821cu
```

Make sure file present on that directory`8821cu.ko`

### Check with **DKMS** (if installing via **DKMS**):

```
sudo dkms status
```

### ARM architecture tweak for this driver (this solves compilation problem of this driver):

```
# For AArch32
sudo cp /lib/modules/$(uname -r)/build/arch/arm/Makefile /lib/modules/$(uname -r)/build/arch/arm/Makefile.$(date +%Y%m%d%H%M)
sudo sed -i 's/-msoft-float//' /lib/modules/$(uname -r)/build/arch/arm/Makefile
sudo ln -s /lib/modules/$(uname -r)/build/arch/arm /lib/modules/$(uname -r)/build/arch/armv7l

# For AArch64
sudo cp /lib/modules/$(uname -r)/build/arch/arm64/Makefile /lib/modules/$(uname -r)/build/arch/arm64/Makefile.$(date +%Y%m%d%H%M)
sudo sed -i 's/-mgeneral-regs-only//' /lib/modules/$(uname -r)/build/arch/arm64/Makefile
```

### Monitor mode

Use the tool 'iw', please don't use other tools like 'airmon-ng'

```
iw dev wlan0 set monitor none
```

## 3.6 使用13年的驱动试试看（是的我还失败了）

## 3.7 充钱是最好的解决办法（真香）

emm，在多种方案尝试下，发现了还是直接买一个最简单，最香。主要是由于我们使用的TPwn725n看似有很多方案，但是实际上其设备ID对应的是rtl8188GU芯片。此芯片恰好没有对应的Liunx驱动，也无人编译进行Linux下移植，网上流传的方案均为rtl8188eu/cu芯片，虽然有人成功了，但是信号也并不完美。并且



> 文章作者：**TwelveCat**  
> 原文地址：<https://wiki.twelvecat.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。