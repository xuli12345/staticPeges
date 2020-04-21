<template>
  <div>
    <div class="top">
      <div class="bw top-content">
        <div class="left">
          <span>传智播客旗下高端在线教育品牌</span> <i>|</i>线下学院
        </div>
        <div class="right"><span>全国咨询热线：010-82826576</span></div>
      </div>
    </div>
    <div class="logo-box bw flex-justify-space-between ">
      <div class="left">
        <a href="#">
          <img src="../../assets/boxuegu-images/logo.png" alt="" />
        </a>
      </div>
      <div class="right">
        <ul class="clearfix">
          <li>学习中心</li>
          <li>购物车<i>|</i></li>
          <li>登录</li>
          <li>注册</li>
        </ul>
      </div>
    </div>
    <!-- 导航模块 -->
    <div class="nav bw clearfix">
      <div class="all-subjects">
        <div class="dt">全部学科</div>
        <ul class="dd">
          <li class="clearfix">
            <a href="#">Java</a>
            <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">前端</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">大数据</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">Android</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">PHP</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">C/C++</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">iOS</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">UI</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">网络营销</a>
            <i class="icon iconfont icon-gengduo"></i>
          </li>
          <li class="clearfix">
            <a href="#">Python</a> <i class="icon iconfont icon-gengduo"></i>
          </li>
        </ul>
      </div>
      <ul class="nav-list">
        <li>首页</li>
        <li>就业班</li>
        <li>精品微课</li>
        <li>免费微课</li>
        <li>问答精灵</li>
        <li>博学社</li>
        <li>学习空间</li>
      </ul>
      <div class="search-box">
        <input type="text" placeholder="搜索课程" />
        <i>|</i>
        <img src="../../assets/boxuegu-images/放大镜.png" alt="" />
      </div>
    </div>
    <!-- banner 模块 -->
    <div class="banner">
      <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img :src="slide" alt />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- 推荐模板 -->
    <div class="bw">
      <ul class="rem clearfix">
        <li>
          <img src="../../assets/boxuegu-images/限时免费课.png" alt="" />
          <div class="right">
            <p class="tit">限时免费课</p>
            <p>22个2017最新课程 限额500名</p>
          </div>
        </li>
        <li>
          <img src="../../assets/boxuegu-images/java图标.png" alt="" />
          <div class="right">
            <p class="tit">超值福利</p>
            <p>Java在线基础班免费学，还能赢千元代...</p>
          </div>
        </li>
        <li>
          <img src="../../assets/boxuegu-images/导师推荐.png" alt="" />
          <div class="right">
            <p class="tit">导师推荐</p>
            <p>Python具有丰富和强大的库。它常被...</p>
          </div>
        </li>
        <li>
          <img src="../../assets/boxuegu-images/黑马图标.png" alt="" />
          <div class="right">
            <p class="tit">线下学院</p>
            <p>为莘莘学子改变命运而讲课，为千万学...</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 主体模块 -->
    <div class="main bw">
      <div class="hot-class">
        <div class="left">
          <h3>
            热门公开直播课
          </h3>
          <div class="swiper">
            <div class="slide-f1">
              <img src="../../assets/boxuegu-images/C语言小游戏.jpg" alt="" />
              <ul class="clearfix">
                <li>贪吃蛇（上）</li>
                <li>讲师：黑马讲师</li>
                <li>开始时间：06/14 20:00</li>
                <li>直播未开始</li>
              </ul>
            </div>
            <div class="slide-f2">
              <img src="../../assets/boxuegu-images/PHP基础班.jpg" alt="" />
              <ul class="clearfix">
                <li>最新PHP基础入门课程</li>
                <li>讲师：孙老师</li>
                <li>开始时间：06/14 20:00</li>
                <li>直播未开始</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="tab">
            <span>博学谷新闻</span>
            <span>资讯公告</span>
          </div>
          <div class="content">
            <img src="../../assets/boxuegu-images/2017.png" alt="" />
            <ul>
              <li>
                <i></i>
                <span>Java在线基础班免费学，还能赢千元代金券！</span>
              </li>
              <li>
                <i></i>
                <span>“限时免费''—500个名额，2017最新课程免费领</span>
              </li>
              <li>
                <i></i>
                <span>云计算在线班，挑战年薪30W</span>
              </li>
              <li>
                <i></i>
                <span> Web前端在线实战班，不解释</span>
              </li>
              <li>
                <i></i>
                <span> 传智播客重磅推出传智专修学院</span>
              </li>
              <li>
                <i></i>
                <span> 获取更多学习资料+源码+笔记</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="bw jy">就业班 <span>从0到1的提升，从这里开始。</span></h3>
      <div class="jy-list">
        <div class="left">
          <div class="top">
            <img src="../../assets/boxuegu-images/web就业班.png" alt="" />
            <p>Web前端在线就业班</p>
          </div>
          <div class="bottom">
            <ul class="clearfix">
              <li>
                <img src="../../assets/boxuegu-images/云数据.png" alt="" />
                <p>云计算之大数据在线就业班</p>
              </li>
              <li>
                <img src="../../assets/boxuegu-images/python.png" alt="" />
                <p>Python+人工智能在线就业</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <ul class="clearfix">
            <li>
              <img src="../../assets/boxuegu-images/全栈工程师.png" alt="" />
              <p>全栈设计师在线就业班</p>
            </li>
            <li>
              <img src="../../assets/boxuegu-images/安卓.png" alt="" />
              <p>Android在线就业班</p>
            </li>
          </ul>
          <div class="bottom">
            <div class="top">
              <img src="../../assets/boxuegu-images/javaweb.png" alt="" />
              <p>JavaEE在线就业班</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部模块 -->
    <div class="footer-box">
      <div class="footer-top bw">
        <div class="left">
          <div class="tit">
            博学谷云课堂
          </div>
          <div class="desc">
            博学谷云课堂，是传智播客旗下的在线教育品牌。专注整合传智优势教学资源、打造适合在线学习并能保证教学结果的优质教学产品，同时打造和运营一整套教育生态软件体系，为用户提供满足自身成长和发展要求的有效服务。
          </div>
        </div>
        <div class="center">
          <div class="tit">
            关注我们
          </div>
          <div class="us">
            <div class="xl"></div>
            <div class="wx"></div>
          </div>
        </div>
        <div class="right">
          <div class="tit">友情链接</div>
          <ul class="clearfix " id="list">
            <li>传智播客</li>
            <li>传智播客论坛</li>
            <li>黑马程序员论坛</li>
            <li>传智播客公开课</li>
            <li>传智教材资源下载</li>
            <li>CSDN</li>
            <li>黑马程序员</li>
            <li>传智云课堂</li>
            <li>逆袭</li>
            <li>博学谷视频库</li>
          </ul>
        </div>
      </div>
      <div class="footer-line"></div>
      <div class="footer-bottom bw">
        <ul class="clearfix flex-center-center">
          <li>
            关于我们
            <i>|</i>
          </li>
          <li>
            人才招聘
            <i>|</i>
          </li>
          <li>
            联系我们
            <i>|</i>
          </li>
          <li>
            常见问题
          </li>
        </ul>
        <div class="copy">
          京ICP备08001421号 京公网安备110108007702 Copyright @ 2016-2017 博学谷
          All Rights Reserved
          <img src="../../assets/boxuegu-images/底部gif.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swiperImg from "../../assets/boxuegu-images/主题背景.jpg";
import swiperImg1 from "../../assets/z-images/topbg1.jpg";

export default {
  data() {
    return {
      name: "bxgIndex",
      swiperOption: {
        pagination: ".swiper-container",

        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination"
        },
        notNextTick: true,
        observer: false, // 修改swiper自己或子元素时,自动初始化化swiper
        observerParswiperents: true, //修改swiper父元素时,自动初始化化swiper
        loop: true, // 自定义分页样式,css样式也写在这里，
        effect: "fade", //设置轮播
        speed: 2000, // 滑动速度
        autoplay: {
          // 自动播放
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      swiperSlides: [swiperImg, swiperImg1]
      // swiperimgs: [swiperImg2, swiperImg3, swiperImg4, swiperImg5]
    };
  }
};
</script>
<style lang="scss" scoped>
.bw {
  margin: auto;
  width: 1190px;
}
.top {
  height: 30px;
  background-color: #f7f7f7;
  .top-content {
    height: 100%;
    line-height: 30px;
    span {
      color: #999;
    }
    .left {
      float: left;
      i {
        padding: 0 5px;
        color: #999;
      }
    }
    .right {
      float: right;
    }
  }
}
.logo-box {
  .left {
    padding: 22px 0 18px 0;
  }
  .right {
    padding: 37px 0 25px 0;
    li {
      float: left;
      padding-right: 15px;
      i {
        padding-left: 15px;
        color: #999;
      }
    }
  }
}
.nav {
  .all-subjects {
    float: left;
    width: 230px;
    .dt {
      height: 38px;
      width: 100%;
      background-color: #4baa47;
      border-radius: 5px 5px 0 0;
      line-height: 38px;
      font-size: 14px;
      color: #fff;
    }
    .dd {
      // display: none;
      position: absolute;
      width: 230px;
      z-index: 111;
      border-radius: 0 0 5px 5px;
      padding: 16px 0 24px 0;
      background-color: rgba(0, 0, 0, 0.5);
      a {
        line-height: 39px;
        color: #fff;
        float: left;
        padding-left: 35px;
      }
      i {
        float: right;
        padding: 12px 54px 0 0;
        color: #fff;
      }
    }
  }
  .nav-list {
    li {
      float: left;
      padding-left: 40px;
      line-height: 38px;
      &:nth-of-type(1) {
        color: #4baa47;
      }
    }
  }
  .search-box {
    padding-left: 10px;
    float: right;
    width: 210px;
    border: 1px solid #eee;
    border-radius: 20px;
    height: 34px;
    line-height: 34px;
    i {
      color: #eee;
    }
    img {
      padding: 0 10px;
    }
  }
}
.banner {
  width: 100%;
  .wrapper {
    img {
      height: 320px;
      width: 100%;
    }
    /deep/ .swiper-pagination-bullet-active {
      background-color: #fff;
    }
    /deep/ .swiper-pagination-bullet {
      opacity: 1;
    }
  }
}
.rem {
  float: right;
  li {
    float: left;
    width: 228px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;
    height: 100px;
    display: flex;
    img {
      width: 54px;
      padding: 16px 12px 0 20px;
    }
    &:nth-of-type(1) {
      background-color: #48bdb2;
    }
    &:nth-of-type(2) {
      background-color: #748cb7;
    }
    &:nth-of-type(3) {
      background-color: #938fb7;
    }
    &:nth-of-type(4) {
      background-color: #c2b47a;
    }
    .right {
      text-align: left;
      color: #fff;
      .tit {
        padding: 20px 0 10px 0;

        font-size: 14px;
      }
    }
  }
}
// 主体模块
.main {
  margin-top: 140px;
  .hot-class {
    display: flex;
    text-align: left;
    height: 314px;
    .left {
      padding-left: 50px;
      width: 640px;
      height: 100%;
      background-color: #00c0b5;
      border-radius: 10px;
      margin-right: 10px;
      h3 {
        font-size: 16px;
        padding: 33px 0 12px 0;
      }
      .swiper {
        display: flex;
        .slide-f1 {
          margin-right: 20px;
        }
        img {
          width: 285px;
          height: 160px;
          border-radius: 10px 10px 0 0;
        }
        ul {
          width: 275px;
          background-color: #fff;
          padding: 15px 0 20px 10px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 0 5px 2px #f7f7f7;
          li {
            float: left;
            width: 50%;
          }
        }
      }
    }
    .right {
      flex: 1;
      background-color: #00c0b5;
      border-radius: 10px;
      padding-left: 50px;

      .tab {
        padding-top: 32px;
        font-size: 16px;
        padding-bottom: 40px;
        span {
          position: relative;
          &:nth-of-type(1) {
            padding-right: 75px;
          }
          &:nth-of-type(2) {
            color: #00ac4f;
          }
          &:nth-of-type(2)::after {
            content: "";
            width: 70px;
            height: 3px;
            position: absolute;
            left: 0;
            top: 22px;
            background-color: #00ac4f;
          }
        }
      }
      .content {
        display: flex;
        img {
          padding-right: 36px;
        }
        ul {
          li {
            padding-bottom: 15px;
            &:nth-of-type(1) {
              color: #00ac4f;
            }
          }
          i {
            border-radius: 50%;
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #00ac4f;
          }
        }
      }
    }
  }
  .jy {
    padding: 22px 0;
    font-weight: 400;
    text-align: left;
    font-size: 16px;
    span {
      color: #999;
      font-size: 12px;
    }
  }
  .jy-list {
    display: flex;
    p {
      margin-top: -50px;
      font-size: 20px;
      color: #fff;
    }
    .right,
    .left {
      margin-right: 10px;
      .top {
        height: 120px;
        position: relative;
        margin-bottom: 10px;
      }
      .bottom {
        ul {
          li {
            float: left;

            &:nth-of-type(1) {
              margin-right: 10px;
            }
          }
        }
      }
    }
    .right {
      ul {
        margin-bottom: 30px;
        li {
          float: left;
          &:nth-of-type(1) {
            margin-right: 10px;
          }
        }
      }
    }
    .bottom {
      .top {
        height: 120px;
        position: relative;
      }
    }
  }
}
// 底部模板
.footer-box {
  // height: 500px;
  padding-bottom: 27px;
  background-color: #2c333f;
  color: #ced3db;
  .footer-top {
    padding-bottom: 20px;
    display: flex;
    .left {
      text-align: left;
      flex: 1;
      .tit {
        font-size: 22px;
        padding: 34px 0 18px 0;
      }
      .desc {
        line-height: 22px;
      }
    }
    .center {
      width: 266px;

      .tit {
        font-size: 22px;
        padding: 34px 0 18px 0;
      }
      .us {
        div {
          width: 48px;
          height: 48px;
          background-size: contain;
          display: inline-block;
        }
        .xl {
          margin-right: 23px;
          background: url("../../assets/boxuegu-images/新浪图标2.png");
        }
        .xl:hover {
          margin-right: 23px;
          background: url("../../assets/boxuegu-images/新浪图标.png");
        }
        .wx {
          background: url("../../assets/boxuegu-images/微信图标2.png");
        }
        .wx:hover {
          background: url("../../assets/boxuegu-images/微信图标.png");
        }
      }
    }
    .right {
      flex: 1;
      .tit {
        font-size: 22px;
        padding: 34px 0 18px 0;
      }
      #list {
        li {
          padding-right: 40px;
          float: left;
        }
      }
    }
  }
  .footer-line {
    border-bottom: 1px solid #393e46;
  }
  .footer-bottom {
    ul {
      padding: 20px 0;
      li {
        i {
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
