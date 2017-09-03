/*
Navicat MySQL Data Transfer

Source Server         : cyl
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : meituan

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-09-03 13:42:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for checkcode
-- ----------------------------
DROP TABLE IF EXISTS `checkcode`;
CREATE TABLE `checkcode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(20) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  `ip` varchar(25) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `expireAt` varchar(20) DEFAULT NULL,
  `used` int(11) DEFAULT NULL,
  `usingAt` datetime DEFAULT NULL,
  `createtime` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of checkcode
-- ----------------------------
INSERT INTO `checkcode` VALUES ('1', '13112122121', '090921', null, '1', '2017-06-09 22:30:18', '1', '2017-06-09 22:25:15', '2017-06-09 22:25:02');
INSERT INTO `checkcode` VALUES ('62', '13624311234', '200150', '::ffff:192.168.56.1', null, '1497192353060', '0', null, '1497192053060');
INSERT INTO `checkcode` VALUES ('63', '18909098989', '692285', '::ffff:192.168.56.1', null, '1497192611575', '0', null, '1497192311575');
INSERT INTO `checkcode` VALUES ('66', '13542422424', '655392', '::ffff:192.168.56.1', null, '1497276647323', '0', null, '1497276347323');
INSERT INTO `checkcode` VALUES ('67', '15111111111', '389307', '::ffff:192.168.56.1', null, '1497276690223', '0', null, '1497276390223');
INSERT INTO `checkcode` VALUES ('68', '15711111111', '946378', '::ffff:192.168.56.1', null, '1497276996521', '0', null, '1497276696521');
INSERT INTO `checkcode` VALUES ('73', '13627385427', '866027', '::ffff:192.168.56.1', null, '1497453438565', '0', null, '1497453138565');
INSERT INTO `checkcode` VALUES ('74', '15111111111', '080798', '::ffff:192.168.56.1', null, '1497453874298', '0', null, '1497453574298');
INSERT INTO `checkcode` VALUES ('75', '15111111111', '374645', '::ffff:192.168.56.1', null, '1497454103915', '0', null, '1497453803915');
INSERT INTO `checkcode` VALUES ('76', '15111111111', '677791', '::ffff:192.168.56.1', null, '1497454238415', '0', null, '1497453938415');
INSERT INTO `checkcode` VALUES ('77', '15111111111', '017521', '::ffff:192.168.56.1', null, '1497454356637', '0', null, '1497454056637');
INSERT INTO `checkcode` VALUES ('78', '18924010989', '168096', '::ffff:192.168.56.1', null, '1497516813746', '0', null, '1497516513746');
INSERT INTO `checkcode` VALUES ('79', '15209890918', '237018', '::ffff:192.168.56.1', null, '1497517026732', '0', null, '1497516726732');
INSERT INTO `checkcode` VALUES ('80', '15122221111', '986560', '::ffff:192.168.56.1', null, '1497623567459', '0', null, '1497623267459');
INSERT INTO `checkcode` VALUES ('85', '15122221111', '284105', '::ffff:192.168.56.1', null, '1497626059784', '0', null, '1497625759784');
INSERT INTO `checkcode` VALUES ('101', '15111111111', '823030', '::ffff:192.168.56.1', null, '1498036621766', '0', null, '1498036321766');
INSERT INTO `checkcode` VALUES ('102', '15922222121', '957248', '::ffff:192.168.56.1', null, '1498036680066', '0', null, '1498036380066');
INSERT INTO `checkcode` VALUES ('103', '15933334444', '262982', '::ffff:192.168.56.1', null, '1498036857581', '0', null, '1498036557581');
INSERT INTO `checkcode` VALUES ('104', '15933334444', '014567', '::ffff:192.168.56.1', null, '1498044585207', '0', null, '1498044285207');
INSERT INTO `checkcode` VALUES ('105', '13211111111', '028323', '::ffff:192.168.56.1', null, '1500802056114', '0', null, '1500801756114');
INSERT INTO `checkcode` VALUES ('106', '13111111111', '084116', '::ffff:192.168.56.1', null, '1501943994581', '0', null, '1501943694581');

-- ----------------------------
-- Table structure for deliverie
-- ----------------------------
DROP TABLE IF EXISTS `deliverie`;
CREATE TABLE `deliverie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `consignee` varchar(45) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `area` varchar(45) NOT NULL,
  `zipcode` int(10) NOT NULL,
  `selected` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `createtime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updatetime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_delivery_users1_idx` (`user_id`),
  CONSTRAINT `fk_delivery_users1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of deliverie
-- ----------------------------
INSERT INTO `deliverie` VALUES ('1', '柴叶露', '15924009886', '临城街道海洋科学城11幢1001室', '浙江省 舟山市 定海区', '316100', '0', '1', '2017-05-29 10:02:20', '2017-05-29 10:02:24');
INSERT INTO `deliverie` VALUES ('2', '柴叶露', '15924009886', '展茅街道沙井社区油车路9号', '浙江省 舟山市 普陀区', '316100', '0', '1', '2017-05-29 10:02:31', '2017-05-29 10:02:34');
INSERT INTO `deliverie` VALUES ('14', '柴叶露', '13878097975', '展茅街道沙井社区油车路9号', '浙江省 舟山市 普陀区', '316100', '0', '2', '2017-06-01 14:27:15', '2017-06-01 14:27:15');
INSERT INTO `deliverie` VALUES ('15', 'aaabbb', '13111112222', 'aaaafffff', '浙江省 宁波市 海曙区', '316000', '1', '17', '2017-07-19 14:45:18', '2017-07-19 14:45:31');
INSERT INTO `deliverie` VALUES ('18', 'aaaa', '3333333', '222222', '黑龙江省 哈尔滨市 市辖区', '222222', '0', '17', '2017-06-20 10:51:09', '2017-07-19 14:45:27');
INSERT INTO `deliverie` VALUES ('19', '徐思琪', '15758247998', '横街社区庄家村', '浙江省 舟山市 普陀区', '316100', '0', '17', '2017-06-23 05:04:56', '2017-06-23 05:04:56');

-- ----------------------------
-- Table structure for food
-- ----------------------------
DROP TABLE IF EXISTS `food`;
CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `price` double NOT NULL,
  `old_price` double DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `sell_count` int(11) DEFAULT NULL,
  `info` varchar(200) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_foods_sellers1_idx` (`seller_id`),
  CONSTRAINT `fk_foods_sellers1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food
-- ----------------------------
INSERT INTO `food` VALUES ('1', '1', '皮蛋瘦肉粥', '10', '12', '咸粥', '24', '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足', 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750', '2017-04-23 15:24:40', '2017-04-23 15:24:45', '1');
INSERT INTO `food` VALUES ('2', '1', '八宝粥', '10', '15', '甜粥', '5', null, 'https://s1.cdn.xiangha.com/caipu/201304/2223/222357571451.png/NjAwX2MxXzQwMA.webp', '2017-04-28 23:53:54', '2017-04-28 23:53:57', '1');
INSERT INTO `food` VALUES ('3', '1', '扁豆焖面', '14', '20', '', '16', null, 'http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750', '2017-05-01 21:56:47', '2017-05-01 21:56:50', '1');
INSERT INTO `food` VALUES ('4', '1', 'vc无限橙果汁', '8', '10', null, '15', null, 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114', null, null, '1');
INSERT INTO `food` VALUES ('5', '1', 'vc无限橙果汁', '8', '10', null, '15', null, 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114', null, null, '1');
INSERT INTO `food` VALUES ('6', '1', 'vc无限橙果汁', '8', '10', null, '15', null, 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114', null, null, '1');
INSERT INTO `food` VALUES ('7', '1', 'vc无限橙果汁', '8', '10', null, '15', null, 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114', null, null, '1');
INSERT INTO `food` VALUES ('8', '1', 'vc无限橙果汁', '8', '10', null, '15', null, 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114', null, null, '1');
INSERT INTO `food` VALUES ('9', '1', 'vc无限橙果汁', '8', '10', null, '15', null, 'http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114', null, null, '1');

-- ----------------------------
-- Table structure for food_category
-- ----------------------------
DROP TABLE IF EXISTS `food_category`;
CREATE TABLE `food_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seller_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `support_id` int(11) NOT NULL DEFAULT '-1',
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_food_category_sellers1_idx` (`seller_id`),
  CONSTRAINT `fk_food_category_sellers1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food_category
-- ----------------------------
INSERT INTO `food_category` VALUES ('1', '1', '热销', '-1', '2017-04-26 19:40:41', '2017-04-26 19:40:48', '1');
INSERT INTO `food_category` VALUES ('2', '1', '单人精彩套餐', '-1', '2017-04-25 23:17:22', '2017-04-27 23:17:26', '1');
INSERT INTO `food_category` VALUES ('3', '2', '热销', '-1', '2017-04-28 21:39:47', '2017-04-28 21:40:58', '1');
INSERT INTO `food_category` VALUES ('4', '1', '冰爽饮品限时特惠', '-1', '2017-05-01 22:05:47', '2017-05-01 22:06:07', '1');
INSERT INTO `food_category` VALUES ('5', '1', '精选热菜', '-1', '2017-05-01 22:05:50', '2017-05-01 22:06:09', '1');
INSERT INTO `food_category` VALUES ('6', '1', '爽口凉菜', '-1', '2017-05-01 22:05:52', '2017-05-01 22:06:12', '1');
INSERT INTO `food_category` VALUES ('7', '1', '精选套餐', '-1', '2017-05-01 22:05:55', '2017-05-01 22:06:17', '1');
INSERT INTO `food_category` VALUES ('8', '1', '果拼果汁', '-1', '2017-05-01 22:05:58', '2017-05-01 22:06:21', '1');
INSERT INTO `food_category` VALUES ('9', '1', '小吃主食', '-1', '2017-05-01 22:06:01', '2017-05-01 22:06:24', '1');
INSERT INTO `food_category` VALUES ('10', '1', '特色粥品', '-1', '2017-05-01 22:06:04', '2017-05-01 22:06:27', '1');
INSERT INTO `food_category` VALUES ('11', '2', '牛肉类盖浇饭', '-1', '2017-05-01 22:07:31', '2017-05-01 22:07:33', '1');
INSERT INTO `food_category` VALUES ('12', '2', '鸡肉类盖浇饭', '-1', '2017-05-01 22:08:47', '2017-05-01 22:08:49', '1');
INSERT INTO `food_category` VALUES ('13', '2', '猪肉类盖浇饭', '-1', '2017-05-01 22:09:07', '2017-05-01 22:09:10', '1');
INSERT INTO `food_category` VALUES ('14', '2', '蔬菜类盖浇饭', '-1', '2017-05-01 22:09:51', '2017-05-01 22:09:54', '1');
INSERT INTO `food_category` VALUES ('15', '2', '炒菜类', '-1', '2017-05-01 22:10:17', '2017-05-01 22:10:19', '1');
INSERT INTO `food_category` VALUES ('16', '2', '汤菜类', '-1', '2017-05-01 22:10:42', '2017-05-01 22:10:44', '1');

-- ----------------------------
-- Table structure for food_category_food
-- ----------------------------
DROP TABLE IF EXISTS `food_category_food`;
CREATE TABLE `food_category_food` (
  `food_id` int(11) DEFAULT NULL,
  `cate_id` int(11) DEFAULT NULL,
  KEY `fk_food_categories__foods_food_categories1_idx` (`cate_id`),
  KEY `fk_food_categories__foods_foods1_idx` (`food_id`),
  CONSTRAINT `fk_food_categories__foods_foods1` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_food_categories__foods_foods2` FOREIGN KEY (`cate_id`) REFERENCES `food_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food_category_food
-- ----------------------------
INSERT INTO `food_category_food` VALUES ('1', '1');
INSERT INTO `food_category_food` VALUES ('2', '2');
INSERT INTO `food_category_food` VALUES ('3', '1');
INSERT INTO `food_category_food` VALUES ('4', '4');
INSERT INTO `food_category_food` VALUES ('5', '4');
INSERT INTO `food_category_food` VALUES ('6', '5');
INSERT INTO `food_category_food` VALUES ('7', '6');
INSERT INTO `food_category_food` VALUES ('8', '7');
INSERT INTO `food_category_food` VALUES ('9', '7');

-- ----------------------------
-- Table structure for food_pic
-- ----------------------------
DROP TABLE IF EXISTS `food_pic`;
CREATE TABLE `food_pic` (
  `food_id` int(11) NOT NULL,
  `pic_id` int(11) NOT NULL,
  KEY `fk_food_pic_foods1_idx` (`food_id`),
  KEY `fk_food_pic_pics1_idx` (`pic_id`),
  CONSTRAINT `fk_food_pic_foods1` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_food_pic_pics1` FOREIGN KEY (`pic_id`) REFERENCES `pic` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food_pic
-- ----------------------------

-- ----------------------------
-- Table structure for food_rating
-- ----------------------------
DROP TABLE IF EXISTS `food_rating`;
CREATE TABLE `food_rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seller_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `food_id` int(11) NOT NULL,
  `rate_time` varchar(20) DEFAULT NULL,
  `delivery_time` varchar(10) DEFAULT NULL,
  `score` int(1) DEFAULT NULL,
  `rate_type` tinyint(1) DEFAULT NULL COMMENT '点赞：（点赞1，不点0）',
  `text` varchar(300) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `id_idx` (`user_id`),
  KEY `food_id_idx` (`food_id`),
  KEY `seller_id` (`seller_id`),
  CONSTRAINT `food_id` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `seller_id` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of food_rating
-- ----------------------------
INSERT INTO `food_rating` VALUES ('1', '1', '1', '1', '1469281964', '30', '5', '0', '不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.', '1');
INSERT INTO `food_rating` VALUES ('2', '1', '1', '1', '1469281964', '25', '4', '1', '', '1');
INSERT INTO `food_rating` VALUES ('3', '1', '1', '2', '1469281432', '30', '5', '0', '以后也会常来吃,强烈推荐.', '1');
INSERT INTO `food_rating` VALUES ('4', '1', '1', '1', '1469281964', '30', '5', '0', '不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.', '1');
INSERT INTO `food_rating` VALUES ('5', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');
INSERT INTO `food_rating` VALUES ('6', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');
INSERT INTO `food_rating` VALUES ('7', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');
INSERT INTO `food_rating` VALUES ('8', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');
INSERT INTO `food_rating` VALUES ('9', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');
INSERT INTO `food_rating` VALUES ('10', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');
INSERT INTO `food_rating` VALUES ('11', '1', '1', '1', '1469281964', '30', '5', '1', '我经常吃这一家', '1');

-- ----------------------------
-- Table structure for hotel
-- ----------------------------
DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `category` smallint(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotel
-- ----------------------------
INSERT INTO `hotel` VALUES ('2', '如家', 'http://techdoc.fd.zol-img.com.cn/g4/M02/04/08/Cg-4WVGHIO2IKdk5AAWBIVw7Z7UAAIRgwISeo8ABYE5194.jpg', '浙江省舟山市普陀区', '13628781980', '1');

-- ----------------------------
-- Table structure for pic
-- ----------------------------
DROP TABLE IF EXISTS `pic`;
CREATE TABLE `pic` (
  `id` int(11) NOT NULL,
  `url` varchar(200) NOT NULL,
  `createtime` varchar(45) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pic
-- ----------------------------

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('1', '2017-04-04 21:19:09', '2017-04-20 21:19:13');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(100) NOT NULL,
  `createtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_role_uindex` (`role`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'ROLE_USER', '2017-09-02 12:20:59');
INSERT INTO `role` VALUES ('2', 'ROLE_ADMIN', '2017-09-02 12:20:59');

-- ----------------------------
-- Table structure for seller
-- ----------------------------
DROP TABLE IF EXISTS `seller`;
CREATE TABLE `seller` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `delivery_time` int(11) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `service_score` float DEFAULT NULL,
  `food_score` float DEFAULT NULL,
  `rank_rate` float DEFAULT NULL,
  `min_price` double DEFAULT NULL,
  `delivery_price` double DEFAULT NULL,
  `bulletin` longtext,
  `avatar` varchar(200) DEFAULT NULL,
  `sellercol` varchar(45) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `dist_info` varchar(45) DEFAULT NULL,
  `dist_start_time` varchar(20) DEFAULT NULL,
  `dist_end_time` varchar(20) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seller
-- ----------------------------
INSERT INTO `seller` VALUES ('1', '粥品香坊（回龙观）', '蜂鸟专送', '38', '3.7', '4.3', '4.7', '69.2', '20', '4', '粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。', 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg', null, '北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340', '13868207595', '该商家支持发票,请下单写好发票抬头', '10:00', '20:30', '2017-04-23 15:20:40', '2017-04-23 15:20:47', '1');
INSERT INTO `seller` VALUES ('2', '面朝大海', '美团专送', '30', '4.1', '4.5', '4.9', '89.2', '30', '2', '粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492956182438&di=b762ba5ccefbd14c249807601b933806&imgtype=0&src=http%3A%2F%2Fp1.pccoo.cn%2Ftuan%2F20140106%2F201401061124003759.jpg', null, '北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340', '13567207989', '该商家支持发票,请下单写好发票抬头', '10:00', '21:30', '2017-04-23 15:20:40', '2017-04-23 15:20:47', '1');

-- ----------------------------
-- Table structure for seller_collection
-- ----------------------------
DROP TABLE IF EXISTS `seller_collection`;
CREATE TABLE `seller_collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `merchant_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `merchant_type` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seller_collection
-- ----------------------------

-- ----------------------------
-- Table structure for support
-- ----------------------------
DROP TABLE IF EXISTS `support`;
CREATE TABLE `support` (
  `id` int(11) NOT NULL,
  `type` tinyint(2) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_supports_sellers1_idx` (`seller_id`),
  CONSTRAINT `fk_supports_sellers1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of support
-- ----------------------------
INSERT INTO `support` VALUES ('1', '1', '1', '满30减5', '2017-05-11 12:19:26', '2017-05-11 12:19:30', '1');
INSERT INTO `support` VALUES ('2', '2', '1', '买套餐送果汁', '2017-05-11 12:20:06', '2017-05-11 12:20:08', '1');
INSERT INTO `support` VALUES ('3', '2', '2', '买套餐送果汁', '2017-05-11 12:20:06', '2017-05-11 12:20:08', '1');

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tags
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(20) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `birthday` varchar(10) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `last_password_reset_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile_UNIQUE` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15924009881', 'zero', null, '$2a$10$IX8Pn6TfLiC/6UdZYPC9/uamfp1qUFS9axkhu1SwyYoqL49waVp8.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzgyNDI0MzEzMSIsImlhdCI6MTUwMTQyODEyOSwiZXhwIjoxNTAxNDMxNzI5fQ.zeQdHml-hL5LkAhcBOVGbU4pA8gJ8M7JSJRw0tse0zA', null, null, 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png', '1', '0000-00-00');
INSERT INTO `user` VALUES ('2', '13824243131', '扬笑留影', '2000-10-10', '$2a$10$9PKljO5TPK3lQn1N/ciOXeVdE2tM6dNlFbpI8D3zLK3Riq3nyXFPa', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzgyNDI0MzEzMSIsImlhdCI6MTUwMTQyODEyOSwiZXhwIjoxNTAxNDMxNzI5fQ.zeQdHml-hL5LkAhcBOVGbU4pA8gJ8M7JSJRw0tse0zA', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('3', '13111111111', 'aaa', null, '$2a$10$IX8Pn6TfLiC/6UdZYPC9/uamfp1qUFS9axkhu1SwyYoqL49waVp8.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzExMTExMTExMSIsImlhdCI6MTUwMTk0MzczNywiZXhwIjoxNTAxOTQ3MzM3fQ.Ix2ZmoaOt3-fMFzfDpi-P8DrYTPDWyPH_GsXV5whZdE', null, null, null, '1', '2017-09-02');
INSERT INTO `user` VALUES ('6', '15313133131', null, null, '$2a$10$wmj3Cj/1fBHGFiXZMVG4GugsWFNkcgH/WIMTb7ONGuyoU7lPdlug.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTMxMzEzMzEzMSIsImlhdCI6MTQ5NzE5MDczNCwiZXhwIjoxNDk3MTk0MzM0fQ.2v711TDFVhWW6JE8J7EzLWwPxtXkbfex16Fyf7MphwU', null, null, null, '1', '0000-00-00');
INSERT INTO `user` VALUES ('7', '15324314529', null, null, '$2a$10$KXWC/.LUuujvSWJ6z9UwUeRJ7tGZ0WttmXrbhvycwK.mzXOpc2oye', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTMyNDMxNDUyOSIsImlhdCI6MTQ5NzE5MTAzMywiZXhwIjoxNDk3MTk0NjMzfQ.304IkREgAjPkLV4J39YKfTvnpyske8eiYlkUTH3rFdo', null, null, null, '1', '0000-00-00');
INSERT INTO `user` VALUES ('8', '13422222222', 'aaa', '2017-01-01', '$2a$10$zxbCN28OTOCV7oS4JPkEbOKUpiziaefre.BxKAK31wX2Z7IbkqivS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzQyMjIyMjIyMiIsImlhdCI6MTUwMDgwMTk0OSwiZXhwIjoxNTAwODA1NTQ5fQ.qTlK44K0sD_cyNQraDgbKG3g2buu2FdB4Xi7dD4trIw', null, null, null, '1', '0000-00-00');
INSERT INTO `user` VALUES ('9', '13624311234', null, null, '$2a$10$GEVKrHrfezxwTTQ94WPfeO5R3xT3L/iTa7AFZeBS6cMrKDCf9c6py', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzYyNDMxMTIzNCIsImlhdCI6MTQ5NzE5MjA3NSwiZXhwIjoxNDk3MTk1Njc1fQ.AKW8UKVKza-7Luvy3AZ2dM2uTGbFfEAggdPXLSfXhdQ', null, null, null, '1', '0000-00-00');
INSERT INTO `user` VALUES ('10', '18909098989', null, null, '$2a$10$AKtnjCi97E7qumShqsjE3uG60LZzVxBzSCBoeNG/ncicccweC794m', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxODkwOTA5ODk4OSIsImlhdCI6MTQ5NzE5MjM0MywiZXhwIjoxNDk3MTk1OTQzfQ.9obWP4eIgIfrNRxtKHmNy_FNgCpyDC2ria9ba1GtwcE', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('11', '15812122121', null, null, '$2a$10$G2S/6uBJkZEFyi.NObfXCe7PEr4VS1XLtBXovCd338qApt8IGbSZ.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTgxMjEyMjEyMSIsImlhdCI6MTQ5NzI3NTg2NywiZXhwIjoxNDk3Mjc5NDY3fQ.vf0mwU5pyiUXazZZ6qKAQTyp3Q9IRISKLOn6gwiaqos', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('12', '13111112222', null, null, '$2a$10$NR5EHztM0c0wxQU5oghMW.2gaesOXWf4oCwaDwqLQwLoxuQMvr8Y6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzExMTExMjIyMiIsImlhdCI6MTQ5NzI3NjExNywiZXhwIjoxNDk3Mjc5NzE3fQ.qnbatT4I_Zz6xWMIV_usf91T0WDhJY1qje-TxrijhPE', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('13', '13542422424', null, null, '$2a$10$wMN9OcTho1Cl.gf0HG/QKOO9yBMe/m8j6RXe3XH50Ex3fQ.LSVskG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzU0MjQyMjQyNCIsImlhdCI6MTQ5NzI3NjM2OSwiZXhwIjoxNDk3Mjc5OTY5fQ.rdD2_I5TubIF6igIMnkpcZAPBxRpcGXlOb2jIIxsj_c', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('14', '15111111111', null, null, '$2a$10$Unc9xsUfi59Q/3l4ts8vneoRs27Xba5KIScZhhLsln6T.865zjKF6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTExMTExMTExMSIsImlhdCI6MTQ5Nzk3MTAxNywiZXhwIjoxNDk3OTc0NjE3fQ.nkcKRaAmNjvE2rVYMqRDI1scRttoZr7JSAxc0GUmits', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('15', '15711111111', null, null, '$2a$10$hTdPK0rdAxO5AEq5nX1gCefHkjUKBpCLI3rddst.UunlFOU3kKOnC', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTcxMTExMTExMSIsImlhdCI6MTQ5NzI3NjczNSwiZXhwIjoxNDk3MjgwMzM1fQ.ojMvAv0MPq4qiq4vnUQS0NQtXe4pvz2tepMXPvLO0nc', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('16', '18924010989', 'mt-18924010989', null, '$2a$10$numIUZ87BrN7wfVeZNKaOeu3LTpUFqX6xYgDyVEUFIcTxVMNU/9UK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxODkyNDAxMDk4OSIsImlhdCI6MTQ5NzUxNjU4NiwiZXhwIjoxNDk3NTIwMTg2fQ.ystNCRmyCLE1Ncqu6MATIIpgQ23qsbL8rrsK-5dBk6A', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('17', '15209890918', 'aaaaa', '2012-04-07', '$2a$10$bgM27fef7OMdrYp4fB63R.uJYgMRAQhEK6XBpbo.rBSATz/ifm33y', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTIwOTg5MDkxOCIsImlhdCI6MTUwMzE1NjQyNywiZXhwIjoxNTAzMTYwMDI3fQ.taeS9zVYJBFXUsC-rMXByxXk7EqkFp5GJd0Vt8XjMHY', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('18', '15122221111', 'mt-15122221111', null, '$2a$10$GdR8Y5.v2nT2KDeiWsxtu.sw4V2m1FLeAdb6sMygHJcgqDZzGg/66', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTEyMjIyMTExMSIsImlhdCI6MTQ5NzYyMzI5OSwiZXhwIjoxNDk3NjI2ODk5fQ.8L-iTEAXk5W8KFOWHlRZ_FxexZRRFSxKPA_11_1DXhg', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('19', '15522222222', 'mt-15522222222', null, '$2a$10$vm.QddqoYgOBxJwUr8ijJeRod8J4mvqarzs6fByaQ9QdE7PUpLsQe', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTUyMjIyMjIyMiIsImlhdCI6MTQ5NzYyNTUwNSwiZXhwIjoxNDk3NjI5MTA1fQ.6bopX3iu_L2PZ-4DeWdMNGUFFP6ln4BG6o8sczla3xg', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('20', '15511113333', 'mt-15511113333', null, '$2a$10$MHmz/acb6OsemVHNrGyd6uyreyvUD6SSb3WprlklqOMptG68FE3uW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTUxMTExMzMzMyIsImlhdCI6MTQ5NzYyNTY1NSwiZXhwIjoxNDk3NjI5MjU1fQ.Elr3xzThnbnK4COWNCz21biaNHsZe7LTV2vK7r2vu48', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('21', '15933334444', 'mt-15933334444', '2017-01-01', '$2a$10$gM3iHUBUOub4aSzYZEZFKOVPd7FKl.8MjTglB7WMRJ2aPNZ.dJKia', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxNTkzMzMzNDQ0NCIsImlhdCI6MTQ5ODA0NDU3OSwiZXhwIjoxNDk4MDQ4MTc5fQ.pvjWHmAEoqmfVOGxr2bvgytKyU9vPFk8DynFl47ADjs', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('22', '13211111111', 'mt-13211111111', null, '$2a$10$Ii7viYo1ozd5jE7ghElKNe34fimsAlx4bIE/7QNOE301kZwX.0o9G', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxMzIxMTExMTExMSIsImlhdCI6MTUwMDgwMjE2MCwiZXhwIjoxNTAwODA1NzYwfQ.GsAMughvGg7YGpeLMtio_IzN_cRUDzhwPP45Ui6R7Lc', null, null, 'https://avatars2.githubusercontent.com/u/13944889?v=4&u=2b4eb58b32d1930057d54a42cd2c5fdc9b836d6c&s=100', '1', '0000-00-00');
INSERT INTO `user` VALUES ('23', '13000000000', null, null, '$2a$10$x9IR.RQ8P6rl/tIuFWlwTOVEAasaceXLyGgfZzgfBQ./RILYENHFu', null, null, '2017-09-02 13:41:51', null, '1', '2017-09-02');
INSERT INTO `user` VALUES ('25', '15222222222', 'mt-15222222222', null, '$2a$10$pTTCLipvtg5EFkrchHVIu.esKfvINkIO.KhIrocRoQH2fBSa6d4Va', null, null, '2017-09-02 13:49:00', null, '1', '2017-09-02');

-- ----------------------------
-- Table structure for user_collection
-- ----------------------------
DROP TABLE IF EXISTS `user_collection`;
CREATE TABLE `user_collection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `merchant_type` varchar(20) NOT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `seller_id` (`merchant_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_collection_ibfk_1` FOREIGN KEY (`merchant_id`) REFERENCES `seller` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `user_collection_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_collection
-- ----------------------------
INSERT INTO `user_collection` VALUES ('2', 'hotel', '2', '17', '2017-07-27 22:45:41');
INSERT INTO `user_collection` VALUES ('7', 'seller', '1', '17', null);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('3', '1');
INSERT INTO `user_role` VALUES ('25', '2');
