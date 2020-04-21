<template>
  <div>
    <div class="nav-box">
      <div class="navs w">
        <div class="left">
          <ul class="clearfix">
            <li>
              商城首页
            </li>
            <li>Hi~欢迎来到ZOL商城，请<a href="#" class="login">登录</a></li>
            <li><a href="#" class="register">免费注册</a></li>
          </ul>
        </div>
        <div class="right">
          <ul class="clearfix">
            <li><router-link to="/h3cIndex">H3C</router-link> </li>
              <li><router-link to="/bxgIndex">博学谷</router-link> </li>
            <li><a href="#">买家中心</a><span class="buy-center"></span></li>
            <li><a href="#">购物车0件</a></li>
            <li>
              <a href="#" class="fr">帮助中心</a> <span class="line">|</span>
            </li>
            <li>
              <span class="phone"></span><a href="#">手机商城</a
              ><span class="help"></span>
            </li>
            <li><a href="#">中关村在线</a></li>
            <li><a href="#">商家入驻</a></li>
            <li><a href="#">联系客服</a><span class="contact"></span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class=" w header  flex-justify-space-between">
      <div class="logo  ">
        <a href="#">
          <img src="../../assets/z-images/logo_180x50.png" alt="" />
          <span class="login-line"></span>
          <img src="../../assets/z-images/同城GO.jpg" alt="" />
        </a>
      </div>
      <div class="search">
        <div class="search-box">
          <input class="search-ipt" type="text" />
          <div class="search-text">搜索</div>
        </div>
        <div class="list">
          <ul class="clearfix">
            <li>小米</li>
            <li>乐视</li>
            <li>华为</li>
            <li>DIY主机降1000元</li>
            <li>超极本降1400元</li>
            <li>热销机械键盘</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <img src="../../assets/z-images/专注数码服务到家.jpg" alt="" />
      </div>
    </div>
    <div class="w nav-list  ">
      <ul class="clearfix">
        <li><a href="#">首页</a></li>
        <li><a href="#">团购</a></li>
        <li><a href="#">ZOL智选</a></li>
        <li><a href="#">DIY攒机馆</a></li>
      </ul>
    </div>
    <div class="bannar-box">
      <img class="left-bg" src="../../assets/z-images/左边背景.jpg" alt="" />
      <div class="w bannar flex-justify-space-between">
        <div class="left">
          <div class="top">
            <swiper
              :options="swiperOption"
              ref="mySwiper"
              class="swiper-container"
            >
              <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"
                ><img :src="slide" alt="" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
          
            </swiper>
          </div>

          <div class="bottom">
            <ul class="clearfix">
              <li v-for="(item, index) in bottomList" :key="index">
                <a href="#">
                  <div class="title">{{ item.title }}</div>
                  <div class="des">{{ item.des }}</div>
                  <img :src="item.pics" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <ul class="clearfix">
            <li v-for="(item, index) in bannarRigthList" :key="index">
              <a href="#">
                <img :src="item.pics" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img class="right-bg" src="../../assets/z-images/右边背景.jpg" alt="" />
    </div>
    <div class="w group">
      <div class="group-box flex-align-center">
        <div class="line"></div>
        <h3>全国团购</h3>
      </div>
      <ul class="w clearfix">
        <li v-for="(item, index) in groupList" :key="index">
          <a href="#">
            <img :src="item.pics" alt="" />
          </a>
          <div class="tiems">
            <p>
              剩余时间:
              <span>{{ item.hour }}</span>
              <span>时</span>
              <span>{{ item.minute }}</span>
              <span>分</span>
              <span>{{ item.second }}</span>
              <span>秒</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-box">
      <div class="w footer">
        <ul class="clearfix">
          <li>合作伙伴 :</li>
          <li>华为商城<span>|</span></li>
          <li>卷皮网<span>|</span></li>
          <li>中国电子银行网<span>|</span></li>
          <li>电子商务平台<span>|</span></li>
          <li>三帝贸易网<span>|</span></li>
          <li>团购<span>|</span></li>
          <li>家具网<span>|</span></li>
          <li>手表品<span>|</span></li>
          <li>钻石<span>|</span></li>
          <li>伊秀女性网<span>|</span></li>
          <li>电子产品世界<span>|</span></li>
          <li>电子产品世界<span>|</span></li>
          <li>易购网<span>|</span></li>
          <li>广告网<span>|</span></li>
          <li>网上114<span>|</span></li>
          <li>中关村在线<span>|</span></li>
          <li>ZOL商城<span>|</span></li>
          <li>团购<span>|</span></li>
          <li>经销商<span>|</span></li>
          <li>产品报价<span>|</span></li>
          <li>论坛<span>|</span></li>
          <li>问答<span>|</span></li>
        </ul>
        <ul class="clearfix">
          <li>关于ZOL商城 :</li>

          <li>帮助中心<span>|</span></li>

          <li>发展历程<span>|</span></li>

          <li>媒体报道</li>
        </ul>
        <ul class="clearfix">
          <li>2016 中关村在线 版权所有. 京ICP证150096号</li>
          <li>京ICP备14061128号</li>
          <li>京公网安备11010802020026号</li>
          <li>网络文化经营许可证京网文[2016]1631-199</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import swiperImg from "../../assets/z-images/中间广告.jpg";
import swiperImg1 from "../../assets/z-images/topbg1.jpg";
import swiperImg2 from "../../assets/z-images/topbg2.jpg";
import swiperImg3 from "../../assets/z-images/topbg3.jpg";
import pic from "../../assets/z-images/thinkpad笔记本.jpg";
import pic1 from "../../assets/z-images/乐目手机.jpg";
import pic2 from "../../assets/z-images/影迅内存.jpg";
import pic3 from "../../assets/z-images/七代i5.jpg";
import pic4 from "../../assets/z-images/戴尔笔记本.jpg";
import pic5 from "../../assets/z-images/魅族手机.jpg";
import pic6 from "../../assets/z-images/美图手机.jpg";
import pic7 from "../../assets/z-images/神州战神.jpg";
import pic8 from "../../assets/z-images/荣耀8.jpg";
import pic9 from "../../assets/z-images/佳能照相机.jpg";
export default {
  data() {
    return {
      swiperOption: {
           pagination: '.swiper-container',

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
      swiperSlides: [swiperImg, swiperImg1, swiperImg2, swiperImg3],
      bottomList: [
        {
          title: "ThinkPad S2-11CD",
          des: "   降千元！赠好礼！",
          pics: pic
        },
        {
          title: "乐目 沙狐V1",
          des: " 领券立减300元！",
          pics: pic1
        },
        {
          title: "影驰8G内存",
          des: "359元限时购",
          pics: pic2
        },
        {
          title: "七代i5 DIY主机",
          des: " 2999元包邮",
          pics: pic3
        }
      ],
      bannarRigthList: [
        {
          title: "戴尔 新游闸 游戏本",
          des: "i5四核+4G独显,显示3888元！",
          pics: pic4
        },
        {
          title: "魅族Pro 6s 立省400元",
          des: " 四轴光学防抖 拍照更清晰",
          pics: pic5
        }
      ],
      groupList: [
        {
          pics: pic6,
          hour: "29",
          minute: "46",
          second: "50"
        },
        {
          pics: pic7,
          hour: "77",
          minute: "46",
          second: "50"
        },
        {
          pics: pic8,
          hour: "39",
          minute: "46",
          second: "50"
        },
        {
          pics: pic9,
          hour: "15",
          minute: "31",
          second: "10"
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="scss" scoped>
.nav-box {
  border-bottom: 1px solid #e6e6e6;
  background-color: #f5f5f5;
}
.navs {
  height: 30px;
  display: flex;
  justify-content: space-between;
  line-height: 30px;

  .left {
    li {
      float: left;
      .login,
      .register {
        color: #69bff5;
        padding-left: 5px;
      }
    }
  }
  .right {
    height: 30px;
    li {
      float: left;
      padding-left: 20px;
      &:nth-of-type(5) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .line {
        color: #d3ccd3;
      }
      .fr {
        padding-right: 20px;
      }
      a {
        display: inline-block;
        height: 100%;
      }
      span {
        display: inline-block;
      }
      .buy-center,
      .help,
      .contact {
        background-image: url("../../assets/z-images/小手机与下箭头.png");
        width: 15px;
        height: 10px;
        background-position: 25px 9px;
        cursor: pointer;
      }
      .phone {
        background-image: url("../../assets/z-images/小手机与下箭头.png");
        width: 15px;
        height: 22px;
        background-position: 32px 47px;
      }
    }
  }
}
.header {
  padding-bottom: 30px;
  padding-top: 12px;
  align-items: center;
  .logo {
    padding-right: 68px;
    a {
      display: flex;
    }
    .login-line {
      display: inline-block;
      width: 1px;
      height: 50px;
      background-color: #d3ccd3;
      margin: 0 10px;
    }
  }
  .search {
    padding-top: 6px;
    flex: 1;
    .search-box {
      margin-top: 8px;
      width: 100%;
      border: 2px solid #c40000;
      height: 30px;
      display: flex;
      .search-ipt {
        flex: 1;
        padding-left: 10px;
      }
      .search-text {
        width: 95px;
        height: 100%;
        color: #fff;
        text-align: center;
        line-height: 30px;
        background-color: #c40000;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .list {
      li {
        float: left;
        padding: 6px 10px 0px 0px;
        color: #999;
      }
    }
  }

  .right {
    padding-left: 72px;
  }
}
.nav-list {
  border-bottom: 2px solid #c40000;
  padding-bottom: 8px;
  li {
    float: left;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 700;
  }
}
.bannar-box {
  width: 100%;
  display: flex;
  .right-bg,
  .left-bg {
    // flex: 1;
    width: 83px;
  }
  .bannar {
    padding-top: 10px;
    padding-bottom: 20px;
    .left {
      width: 900px;
      .top {
        img {
          width: 100%;
        }
        // /deep/ .swiper-pagination-bullet-active {
        //   background-color: #fff;
        // }
      }
      .bottom {
        width: 100%;
        a {
          display: block;
        }
        ul {
          border: 1px solid #e6e6e6;
        }
        li {
          width: 25%;
          float: left;
          border-right: 1px solid #e6e6e6;
          box-sizing: border-box;
          padding: 10px 15px;
          &:nth-last-of-type(1) {
            border-right: none;
          }
          .title,
          .des {
            text-align: left;
            font-size: 14px;
            line-height: 26px;
          }
          .des {
            color: #c40000;
          }
          img {
            float: right;
          }
        }
      }
    }
    .right {
      width: 300px;
      // flex: 1;
      li {
        &:nth-last-of-type(1) {
          margin-top: 2px;
        }
      }
      a {
        display: block;
        img {
          width: 100%;
          height: 257px;
        }
      }
    }
  }
}

.group {
  padding-bottom: 30px;
  .group-box {
    padding-bottom: 10px;
    .line {
      width: 3px;
      height: 25px;
      background-color: #c40000;
      margin-right: 10px;
    }
    h3 {
      font-size: 20px;
      font-weight: 700px;
    }
  }
  ul {
    border: 1px solid #e6e6e6;
  }
  li {
    float: left;
    width: 25%;
    border-right: 1px solid #e6e6e6;
    box-sizing: border-box;
    &:nth-last-of-type(1) {
      border-right: none;
    }

    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .tiems {
      padding-bottom: 10px;
      color: #999;
      span {
        &:nth-of-type(odd) {
          color: #f25555;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
.footer-box {
  background-color: #2d2d2d;
  .footer {
    padding: 30px 0px;
    ul {
      padding-bottom: 10px;
      &:nth-of-type(1),
      &:nth-of-type(2) {
        color: #fff;
        li {
          float: left;
          padding-right: 10px;
          &:nth-of-type(1) {
            color: #999;
          }
          span {
            padding-left: 10px;
          }
        }
      }
      &:nth-of-type(3) {
        li {
          float: left;
          color: #999;
          padding-right: 30px;
        }
      }
    }
  }
}
</style>
