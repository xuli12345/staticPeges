<template>
  <div>
    <div class="wrapper ">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img :src="slide" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- 头部 -->
      <div class="h-top">
        <div class="logo">
          <a href="#">
            <img src="../../assets/h-images/newlogo.png" alt />
          </a>
        </div>
        <div class="nav">
          <ul>
            <li><a herf="#">产品技术</a></li>
            <li><a herf="#">解决方案</a></li>
            <li><a herf="#">服务</a></li>
            <li><a herf="#">新华三大学</a></li>
            <li><a herf="#">合作伙伴</a></li>
            <li><a herf="#">关于我们</a></li>
          </ul>
        </div>
        <div class="user">
          <ul>
            <li>
              <a href="#">注册</a>
              <img src="../../assets/h-images/02.png" alt="" />
              <span>|</span>
            </li>
            <li>
              <a href="#">登录</a>
              <img src="../../assets/h-images/02.png" alt="" />
            </li>
            <li>
              <a href="#">English</a>
              <img src="../../assets/h-images/02.png" alt="" />
            </li>
            <li>
              <a href="#">HK</a>
              <img src="../../assets/h-images/02.png" alt="" />
            </li>
          </ul>
          <div class="search">
            <input type="text" placeholder="search" />
            <img src="../../assets/h-images/01.png" alt />
          </div>
        </div>
      </div>
      <div class="hot-news ">
        <div class="title">热点新闻 |</div>
        <div class="des">郑州市市长程志明一行莅临郑州大数据产业园调研</div>
        <div class="time">[2017-05-26]</div>
      </div>
    </div>
    <!-- 行业模块 -->
    <div id="trade">
      <h3 class="tit">行业</h3>
      <div class="des">
        <p>
          VCF架构是华三"云网融合"解决方案的核心支撑，将云计算、智慧网络、IT安全、移动化等解决方案融合拉通，
        </p>
        <p>
          并通过软件定义与资源编排，实现IT基础设施资源自动化调度、弹性扩展、应需而动。
        </p>
      </div>
      <ul class="w">
        <li>
          <img src="../../assets/h-images/32.jpg" alt="" />
          <p class="serve">服务浦东政务</p>
        </li>
        <li>
          <img src="../../assets/h-images/3.jpg" alt="" />
          <p class="serve">服务天津地铁</p>
        </li>
        <li>
          <img src="../../assets/h-images/31.jpg" alt="" />
          <p class="serve">服务上海财经大学</p>
        </li>
      </ul>
      <ul class="w">
        <li>
          <img src="../../assets/h-images/768.png" alt="" />
        </li>
        <li>
          <div class="desc ">
            <p class="f1">让IT始终保持最佳状态</p>
            <h3 class="tit">致力于优质的服务</h3>
            <p class="fr">
              凭借我们业界最大的生态系统和合作伙伴支持网络以及全球分布的资源,无论您身在何地,都可获得全面周到的本地服务
            </p>
          </div>
          <ul class="number-box">
            <li>
              <img src="../../assets/h-images/h3c_img_shu_02.png" alt="" />
              <p class="first">个区域服务机构</p>
              <p>覆盖全国90+城市</p>
            </li>
            <li>
              <img src="../../assets/h-images/h3c_img_shu_04.png" alt="" />
              <p class="first">个备件中心</p>
              <p>原厂备件服务覆盖700+城市</p>
              <p>2862个县级市及98%的乡镇</p>
            </li>
            <li>
              <img src="../../assets/h-images/h3c_img_shu_06.png" alt="" />
              <p class="first">家专业认证渠道服务交付资源</p>
              <p>负责中国大陆、香港及日本地区客户 服务技术支持工作</p>
            </li>
          </ul>
        </li>
      </ul>
      <div class="w recommend">
        <div class="left">
          <img src="../../assets/h-images/H3C_ITnew_21.jpg" alt="" />
        </div>
        <div class="right">
          <div class="top">
            <img src="../../assets/h-images/H3C_ITnew_23.jpg" alt="" />
          </div>
          <div class="bottom">
            <img src="../../assets/h-images/H3C_ITnew_26.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部模板 -->
    <div class="footer">
    <div class="content w">
      <ul>
        <li>按访问者</li>
        <li>政府及企业用户</li>
        <li>运营商</li>
        <li>广电</li>
        <li>中小企业</li>
        <li>个人消费者</li>
        <li>合作伙伴</li>
        <li>求职者</li>
      </ul>
      <ul>
        <li>关于H3C</li>
        <li>公司介绍</li>
        <li>发展历程</li>
        <li>经典案例</li>
        <li>《新IT领航》</li>
        <li>《新华三》</li>
      </ul>
      <ul>
        <li>联系H3C</li>
        <li>公司总部</li>
        <li>办事处</li>
        <li>代理商</li>
        <li>如何购买</li>
        
      </ul>
      <ul>
        <li>常用链接</li>
        <li>产品图标</li>
        <li>条码防伪查询系统</li>
        <li>产品验货及防伪查询指导</li>
      </ul>
      <ul>
        <li>合作伙伴</li>
        <li>代理商查询</li>
        <li>成为H3C合作伙伴</li>
        <li>新IT智慧产业联盟</li>
        <li>云计算技术联盟</li>
      </ul>
      <ul>
        <li>
          <img src="../../assets/h-images/weibo.jpg" alt="">
        </li>
        <li>
          <p>官方微博</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="../../assets/h-images/h3c_weixin.png" alt="">
        </li>
        <li>
          <p>官方微信</p>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>
<script>
import swiperImg from "../../assets/h-images/04.jpg";
import swiperImg1 from "../../assets/z-images/topbg1.jpg";

export default {
  data() {
    return {
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
    };
  }
};
</script>
<style lang="scss" scoped>
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("../../assets/h-images/leftbtn.png");
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("../../assets/h-images/rightbtn.png");
}
/deep/ .swiper-pagination-bullet {
  background-color: #fff;
  opacity: 1;
}
/deep/ .swiper-pagination-bullet-active {
  background-color: yellow;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 70px;
}
.swiper-container img {
  height: 660px;
}
.wrapper {
  height: 660px;
  position: relative;
}
.h-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  .logo {
    a {
      display: block;
    }
  }
  .nav {
    ul {
      display: flex;

      li {
        padding-right: 45px;
        a {
          display: block;
          color: #fff;
        }
      }
    }
  }
  .user {
    display: flex;
    flex-direction: column;
    ul {
      margin-bottom: 15px;
      display: flex;
      a {
        color: #fff;
      }
      img {
        padding: 0 8px;
        cursor: pointer;
      }
      span {
        color: #7e6c63;
        padding-right: 10px;
      }
    }
  }
  .search {
    width: 240px;
    height: 26px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      padding-left: 5px;
    }
    img {
      position: absolute;
      right: 8px;
      top: 5px;
      width: 16px;
    }
  }
}
.hot-news {
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 50px;
  color: #fff;
  .title {
    padding-left: 20px;
  }
  .des {
    padding: 0 20px;
  }
  .time {
    color: #99876a;
  }
}
#trade {
  padding: 54px 0 20px 0;
  display: flex;
  flex-direction: column;
  .tit {
    font-size: 34px;
    font-weight: 400;
  }
  .des {
    color: #999;
    font-size: 14px;
  }
  ul {
    display: flex;
    &:nth-of-type(1) {
      padding-top: 60px;
      li {
        width: 33.33%;
        position: relative;
        &:nth-of-type(2) {
          margin: 0 20px;
        }
        img {
          width: 100%;
        }
        .serve {
          width: 96%;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 45px;
          line-height: 45px;
          background-color: rgba(0, 0, 0, 0.5);
          text-align: left;
          color: #fff;
          padding-left: 15px;
        }
      }
    }
    &:nth-of-type(2) {
      padding-top: 90px;
      .desc {
        display: flex;
        flex-direction: column;
        .f1 {
          font-size: 20px;
        }
        .tit {
          font-size: 36px;
          padding: 25px 0;
        }
        .fr {
          font-size: 14px;
          padding-left: 20px;
          color: #999;
        }
      }
      .number-box {
        p {
          line-height: 24px;
          color: #999;
        }
        .first {
          color: #000;
        }
        img {
          padding-bottom: 15px;
        }
      }
    }
  }
  .recommend{
    padding-top: 80px;
    display: flex;
    .left{
      flex: 1;
      img{
        width: 100%;
      }
    }
    .right{
      padding-left: 25px;
      flex: 1;
      .top{
        padding-bottom: 20px;
      }
      img{
        width: 100%;
      }
    }
  }
}
// 底部模板
.footer{
  margin-top: 100px;
  padding-top: 60px;
  background-color: #3f4242;
  .content{
display: flex;
ul{
  flex: 1;
  li{
    color: #999;
    line-height: 28px;
    font-size: 14px;
    nht
    &:nth-of-type(1){
      color: #fff;
      font-size: 16px;
      padding-bottom: 18px;
    }
    &:nth-last-of-type(1){
      padding-bottom: 45px;
    }
  }
}
  }
}
</style>
