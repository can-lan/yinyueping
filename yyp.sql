SET NAMES UTF8;
#CREATE DATABASE yyp CHARSET=UTF8;
use yyp;
/*用户表*/
CREATE TABLE yyp_user(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(32),
  phone VARCHAR(20),
  photo VARCHAR(128) DEFAULT '.http://wx.yinyueping.com/image/app/photo.png',
  love VARCHAR(10240)
);
/*歌曲表*/
CREATE TABLE yyp_song(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(16),
  singer VARCHAR(64),
  epname VARCHAR(16),
  coverImgUrl VARCHAR(128), #封面图
  src VARCHAR(128),         #歌曲地址
  list INT DEFAULT 1, #所属歌单id
  rank VARCHAR(16) DEFAULT 'new' #所属榜单
);
/*歌单表*/
CREATE TABLE yyp_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  img VARCHAR(128),
  author VARCHAR(16),
  photo VARCHAR(128) DEFAULT 'http://wx.yinyueping.com/image/user/default.jpg' #默认作者头像
);
/*歌手表*/
CREATE TABLE yyp_singer(
  id INT PRIMARY KEY AUTO_INCREMENT,
  singer VARCHAR(32),
  img VARCHAR(128)
);
/*视频表*/

/*歌曲表数据*/
INSERT INTO yyp_song VALUES
(null,'前前前世','radwinmps','君的名字','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/qqqs.mp3',DEFAULT,'up'),
(null,'Bila','candy','Bila','http://wx.yinyueping.com/image/song/fragment.jpg','http://wx.yinyueping.com/song/bila.mp3',DEFAULT,DEFAULT),
(null,'My Heart','','','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/myheart.mp3',DEFAULT,'up'),
(null,'Cosi Tanto','federica','magari','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/cositanto.mp3',DEFAULT,'hot'),
(null,'The truth that you leave','pianoboy','pianoboy','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/thetruethatyouleave.mp3',DEFAULT,DEFAULT),
(null,'2017 End of the year','Vicetone','Vicetone','http://wx.yinyueping.com/image/song/fragment.jpg','http://wx.yinyueping.com/song/2017.mp3',DEFAULT,'up'),
(null,'River Flows in You','yiruma','absolute','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/rfiy.mp3',DEFAULT,'hot'),
(null,'lifeline','zeraphym','lifeline','http://wx.yinyueping.com/image/song/fragment.jpg','http://wx.yinyueping.com/song/lifeline.mp3',10,'hot'),
(null,'童话镇','暗杆','童话镇','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/thz.mp3',10,'hot'),
(null,'想遇见一个人','曾咏熙','想遇见','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/xyjygr.mp3',10,'up'),
(null,'愚昧','陈雪凝','拾陆','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/ym.mp3',9,'game'),
(null,'其实,我就在你方圆几里','陈壹千','其实','http://wx.yinyueping.com/image/song/kn.jpg','http://wx.yinyueping.com/song/qswjznfyjl.mp3',9,'game'),
(null,'二号位','河豚','二号位','http://wx.yinyueping.com/image/song/wxhsnsdnxhd.jpg','http://wx.yinyueping.com/song/ehw.mp3',8,'game'),
(null,'小相思','花粥','小相思','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/xxs.mp3',8,'game'),
(null,'有你陪伴的夏天','黄靖','环城七十里','http://wx.yinyueping.com/image/song/bwmnh.jpg','http://wx.yinyueping.com/song/ynpbdxt.mp3',7,'up'),
(null,'撒野','凯瑟喵','撒野','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/sy.mp3',7,'game'),
(null,'血腥爱情故事','祖娅纳惜','祖娅纳惜','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/xxaqgs.mp3',7,'game'),
(null,'丁建国写的歌','路默依','缝纫机乐队','http://wx.yinyueping.com/image/song/wxhsnsdnxhd.jpg','http://wx.yinyueping.com/song/djgxdg.mp3',6,'dy'),
(null,'霜雪千年','洛天依','洛天依作品','http://wx.yinyueping.com/image/song/dx.jpg','http://wx.yinyueping.com/sxqn.mp3',6,'dy'),
(null,'塑料袋','乔杉','缝纫机乐队','http://wx.yinyueping.com/image/song/kn.jpg','http://wx.yinyueping.com/song/sld.mp3',6,'dy'),
(null,'我已经爱上你','情词尧','一秒钟而已','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/wyjasn.mp3',5,'dy'),
(null,'妥协','是阿涵啊','阿涵翻唱','http://wx.yinyueping.com/image/song/wxhsnsdnxhd.jpg','http://wx.yinyueping.com/song/tx.mp3',5,'dy'),
(null,'心做','双笙','心做','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/xz.mp3',5,'dy'),
(null,'终有一天,我会抛弃你们','兔裹煎蛋卷','兔裹煎蛋卷','http://wx.yinyueping.com/image/song/dx.jpg','http://wx.yinyueping.com/song/zyytwhpqnm.mp3',4,'up'),
(null,'等下一个他','习谱予','习谱予','http://wx.yinyueping.com/image/song/wxhsnsdnxhd.jpg','http://wx.yinyueping.com/song/dxygt.mp3',4,'up'),
(null,'我的一个道姑朋友','以冬','以冬','http://wx.yinyueping.com/image/song/kn.jpg','http://wx.yinyueping.com/song/wdygdgpy.mp3',4,'up'),
(null,'想对现在告别','习谱予','想对现在告别','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/xdxzgb.mp3',3,'hot'),
(null,'绿茶','杨亚茹','绿茶','http://wx.yinyueping.com/image/song/fragment.jpg','http://wx.yinyueping.com/song/lc.mp3',3,'hot'),
(null,'夢灯籠','radwinmps','君的名字','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/mdl.mp3',DEFAULT,DEFAULT),
(null,'去年夏天','杨梓琪呀','杨梓琪呀','http://wx.yinyueping.com/image/song/default.jpg','http://wx.yinyueping.com/song/qnxt.mp3',3,'hot'),
(null,'少林英雄','于光荣','少林英雄','http://wx.yinyueping.com/image/song/bwmnh.jpg','http://wx.yinyueping.com/song/slyx.mp3',2,'hot'),
(null,'Fragments','千坂','Fragments','http://wx.yinyueping.com/image/song/fragment.jpg','http://wx.yinyueping.com/song/fragments.mp3',2,'up'),
(null,'卡农','千坂','canon','http://wx.yinyueping.com/image/song/kn.jpg','http://wx.yinyueping.com/song/kn.mp3',DEFAULT,'hot'),
(null,'我喜欢上你时的内心活动','陈绮贞','陈绮贞','http://wx.yinyueping.com/image/song/wxhsnsdnxhd.jpg','http://wx.yinyueping.com/song/wxhsnsdnxhd.mp3',DEFAULT,'new'),
(null,'不完美女孩','周冬雨','周冬雨','http://wx.yinyueping.com/image/song/bwmnh.jpg','http://wx.yinyueping.com/song/bwmnh.mp3',DEFAULT,'game'),
(null,'稻香','周杰伦','摩羯座','http://wx.yinyueping.com/image/song/dx.jpg','http://wx.yinyueping.com/song/dx.mp3',DEFAULT,'dy'),
(null,'怪兽入侵','刘维','火星情报局','http://wx.yinyueping.com/image/song/gsrq.jpg','http://wx.yinyueping.com/song/gsrq.mp3',2,'hot');

/*歌单表数据*/
INSERT INTO yyp_list VALUES
(null,'你以为我不会走,我以为你会留','http://wx.yinyueping.com/image/list/list1.jpg','音乐瓶',DEFAULT),
(null,'我最大的遗憾,是你的遗憾与我有关','http://wx.yinyueping.com/image/list/list2.jpg','音乐瓶',DEFAULT),
(null,'希望十八岁你爱的人是八十岁在你身边的人','http://wx.yinyueping.com/image/list/list3.jpg','音乐瓶',DEFAULT),
(null,'怀旧向||时光流转从前,人生如寄','http://wx.yinyueping.com/image/list/list4.jpg','音乐瓶',DEFAULT),
(null,'浮生有梦三千场 穷尽千里诗酒慌','http://wx.yinyueping.com/image/list/list5.jpg','音乐瓶',DEFAULT),
(null,'我爱你的100种表达方式','http://wx.yinyueping.com/image/list/list6.jpg','音乐瓶',DEFAULT),
(null,'全球史诗级万评电音','http://wx.yinyueping.com/image/list/list7.jpg','音乐瓶',DEFAULT),
(null,'这都是什么神仙翻唱','http://wx.yinyueping.com/image/list/list8.jpg','音乐瓶',DEFAULT),
(null,'听了几个故事,正好讲给你玩','http://wx.yinyueping.com/image/list/list9.jpg','音乐瓶',DEFAULT),
(null,'若是心怀旧梦 就别无疾而终','http://wx.yinyueping.com/image/list/list10.jpg','音乐瓶',DEFAULT);
/*歌手表数据*/
INSERT INTO yyp_singer VALUES
(null,'Vicetont','http://wx.yinyueping.com/image/singer/singer1.jpg'),
(null,'房东的猫','http://wx.yinyueping.com/image/singer/singer2.jpg'),
(null,'陈粒','http://wx.yinyueping.com/image/singer/singer3.jpg'),
(null,'陈绮贞','http://wx.yinyueping.com/image/singer/singer4.jpg'),
(null,'陈雪凝','http://wx.yinyueping.com/image/singer/singer5.jpg'),
(null,'花粥','http://wx.yinyueping.com/image/singer/singer6.jpg'),
(null,'任然','http://wx.yinyueping.com/image/singer/singer7.jpg'),
(null,'双笙','http://wx.yinyueping.com/image/singer/singer8.jpg'),
(null,'蔡健雅','http://wx.yinyueping.com/image/singer/singer9.jpg'),
(null,'洛天依','http://wx.yinyueping.com/image/singer/singer10.jpg'),
(null,'谢春花','http://wx.yinyueping.com/image/singer/singer11.jpg'),
(null,'周杰伦','http://wx.yinyueping.com/image/singer/singer12.jpg'),
(null,'李荣浩','http://wx.yinyueping.com/image/singer/singer13.jpg'),
(null,'毛不易','http://wx.yinyueping.com/image/singer/singer14.jpg'),
(null,'薛之谦','http://wx.yinyueping.com/image/singer/singer15.jpg'),
(null,'更多','http://wx.yinyueping.com/image/singer/singer16.jpg');