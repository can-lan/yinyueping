SET NAMES UTF8;
CREATE DATABASE yyp CHARSET=UTF8;
use yyp;
/*用户表*/
CREATE TABLE yyp_user(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(32),
  phone VARCHAR(20),
  photo VARCHAR(128) DEFAULT './img/pub/photo.png',
  love VARCHAR(10240)
);
/*歌曲表*/
CREATE TABLE yyp_song(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(16),
  singer VARCHAR(16),
  epname VARCHAR(16),
  coverImgUrl VARCHAR(128), #封面图
  src VARCHAR(128),         #歌曲地址
  list INT DEFAULT 0 #所属歌单id
);
/*歌单表*/
CREATE TABLE yyp_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(16),
  img VARCHAR(16),
  author VARCHAR(16)
);
/*视频表*/
/*歌曲表数据*/
INSERT INTO yyp_song VALUES
(null,'Fragments','千坂','Fragments','http://www.zhuimi.co/song/img/fragments.jpg','http://www.zhuimi.co/song/fragments.mp3',DEFAULT),
(null,'卡农','千坂','Fragments','http://www.zhuimi.co/song/img/kn.jpg','http://www.zhuimi.co/song/kn.mp3',DEFAULT),
(null,'我喜欢上你时的内心活动','陈绮贞','Fragments','http://www.zhuimi.co/song/img/wxhsnsdnxhd.jpg','http://www.zhuimi.co/song/wxhsnsdnxhd.mp3',DEFAULT),
(null,'不完美女孩','周冬雨','Fragments','http://www.zhuimi.co/song/img/bwmnh.jpg','http://www.zhuimi.co/song/bwmnh.mp3',DEFAULT),
(null,'稻香','周杰伦','Fragments','http://www.zhuimi.co/song/img/dx.jpg','http://www.zhuimi.co/song/dx.mp3',DEFAULT);