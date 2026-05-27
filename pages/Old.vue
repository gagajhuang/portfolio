<template>
  <div id="index">
    1. AOS 動畫 Demo
    <h1 data-aos="fade-up">
      {{ $t('index.h1') }}
    </h1>
    
    <br><br><br><br>

    <div class="swiper-block">
      2. Swiper Demo
      <ClientOnly>
        <swiper-container ref="refRecap" :loop="true" :init="false">
          <swiper-slide v-for="(item, index) in 15" :key="index">
            <img :src="getImagePath(`${index + 1}.jpg`)" alt="" />
          </swiper-slide>
        </swiper-container>
        <!-- 分頁 -->
        <div class="swiper-pagination"></div>

        <!-- 前後按鈕 -->
        <button class="swiper-button-prev" aria-label="Previous"></button>
        <button class="swiper-button-next" aria-label="Next"></button>
      </ClientOnly>
    </div>

    <span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>
    <br><span>11111</span>

    <br>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    // anchorPlacement: 'top-center',
  });
});

// 照片
const glob2 = import.meta.glob('@/assets/images/photos/*', { eager: true })

function getImagePath(imageName) {
  const path = `/assets/images/photos/${imageName}`;
  return glob2[path]?.default || '';

}

const refRecap = ref(null);
const swiper = useSwiper(refRecap, {
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: true,
  pagination: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 24,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

</script>
<style lang="scss">
$indexImgUrl: '@/assets/images/';

#index {
  h1 {
    @include flex-center;
  }

  .swiper-block {
    position: relative;

    /* 前後按鈕樣式 */
    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: url($indexImgUrl + '/icon-arrow.svg') no-repeat center/contain;
      width: 40px;
      height: 40px;
      cursor: pointer;

      @include mobile {
        width: vw(25);
        height: vw(25);
      }
    }

    .swiper-button-prev {
      left: 10px;
      transform: rotate(180deg);

      @include mobile {
        left: vw(5);
      }
    }

    .swiper-button-next {
      right: 10px;

      @include mobile {
        right: vw(5);
      }
    }

    /* 分頁樣式 */
    .swiper-pagination {
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }

    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
      background: #D9D9D9;
      border-radius: 50%;
      margin: 0 6px;
      display: inline-block;
      cursor: pointer;

      @include mobile {
        width: vw(15);
        height: vw(15);
        margin: 0 vw(6);
      }
    }

    .swiper-pagination-bullet-active {
      background: #000;
    }

  }


}
</style>