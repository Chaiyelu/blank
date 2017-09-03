# blank
## 仿美团app的一个demo
目前已完成外卖部分，和用户信息设置，用户登录注销，用户收藏商户部分

![示例图](https://github.com/Chaiyelu/blank/blob/master/demogif/TIM%E6%88%AA%E5%9B%BE20170903134938.png)

> ft是前端系统，采用的技术是ionic2+，angular2+，rudex，Cordova

> bk是数据接口，采用的技术是express，sequelize，用户登录认证采用jsonwebtoken技术。

> 数据库采用mysql。

## 部署过程
> 本地部署需要安装redis(默认端口即可)，mysql

> 安装完mysql之后将主目录下的数据源文件（meituan.sql）导入，修改sequelize配置文件

![示例图](https://github.com/Chaiyelu/blank/blob/master/demogif/TIM%E5%9B%BE%E7%89%8720170903135620.png)

> meituan.mwb是er模型图
![示例图](https://github.com/Chaiyelu/blank/blob/master/demogif/TIM%E5%9B%BE%E7%89%8720170903142408.png)

> 安装完成之后进入bk目录npm start即可

> 最后进入前端ft目录ionic serve即可


![示例图](https://github.com/Chaiyelu/blank/blob/master/meituan02.gif)
![示例图](https://github.com/Chaiyelu/blank/blob/master/demogif/%E6%B3%A8%E5%86%8C%E6%B5%81%E7%A8%8B1.gif)
