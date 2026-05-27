<template>
  <div id="index">
    <div class="intro-wrap">
      <section class="hero">
        <div class="hero__inner">
          <div class="hero__left">
            <h1 class="hero__title" data-aos="fade-right">Hi, I'm Gaga.</h1>
            <div class="hero__sub" data-aos="fade-right" data-aos-delay="100">
              <p>
                UI/UX
                <span class="p-xs">&</span>
                Front-end Design<span class="sub-white">er</span>
              </p>
              <p class="sub-s">設計思考 × 前端開發</p>
            </div>
            <div class="visible-desktop">
              <a
                href="#about"
                class="btn-arrow"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                View More
                <div class="btn-arrow__icon">
                  <img src="@/assets/images/icon-arrow.svg" alt="" />
                </div>
              </a>
            </div>
          </div>

          <div class="hero__right" data-aos="fade-left" data-aos-delay="150">
            <div class="hero__photo">
              <img src="@/assets/images/about/selfie.svg" alt="Gaga" />
            </div>
            <div class="hero__badge" data-aos="fade-up" data-aos-delay="400">
              <span class="hero__badge-num">10+</span>
              <span class="hero__badge-label">Work experience</span>
            </div>
          </div>
          <div class="visible-tablet">
            <a
              href="#about"
              class="btn-arrow"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              View More
              <div class="btn-arrow__icon">
                <img src="@/assets/images/icon-arrow.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="section-title" data-aos="fade-up">
          <h2>About</h2>
        </div>
        <p class="about__desc" data-aos="fade-up" data-aos-delay="100">
          Hi，我是 Gaga，具備 UI/UX 設計與前端切版開發能力<br />
          喜歡觀察與分析使用者行為並規劃介面流程，並將設計落實於專案中<br />
          能獨立完成具互動性功能的網頁
        </p>
        <div class="about__tools" data-aos="fade-up" data-aos-delay="200">
          <div v-for="tool in tools" :key="tool.name" class="tool-chip">
            <img :src="tool.img" :alt="tool.name" />
          </div>
        </div>
      </section>
    </div>

    <div class="page-inner">
      <section id="experience" class="page-section">
        <div class="section-title" data-aos="fade-up">
          <h2>Experience</h2>
          <span class="title-line"></span>
        </div>
        <div class="exp-list">
          <div
            v-for="(item, i) in experiences"
            :key="i"
            class="exp-item"
            data-aos="fade-up"
          >
            <div class="exp-item__content">
              <div class="exp-item__tt">
                <p class="exp-item__role">{{ item.role }}</p>
                <p class="exp-item__company">{{ item.company }}</p>
              </div>
              <div class="exp-item__desc">
                <p v-for="(line, li) in item.desc" :key="li">{{ line }}</p>
              </div>
            </div>
            <span class="exp-item__period">{{ item.period }}</span>
          </div>
        </div>
      </section>

      <section id="works" class="page-section">
        <div class="section-title section-title--lg" data-aos="fade-up">
          <h2>Featured Work</h2>
          <span class="title-line"></span>
        </div>
        <div class="work-grid">
          <a
            v-for="(work, i) in featuredWorks"
            :key="i"
            class="work-card"
            :href="work.url"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <div class="work-card__thumb">
              <img v-if="work.img" :src="work.img" :alt="work.title" />
            </div>
            <div class="work-card__info">
              <div class="work-card__header">
                <div class="work-card__tt">
                  <p class="work-card__name">{{ work.title }}</p>
                  <p class="work-card__role">{{ work.role }}</p>
                </div>
                <img
                  src="@/assets/images/icon-arrow.svg"
                  class="work-card__arrow"
                  alt=""
                />
              </div>
              <div class="work-card__tags">
                <span v-for="tag in work.tags" :key="tag" class="tag">{{
                  tag
                }}</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section class="page-section">
        <div class="section-title" data-aos="fade-up">
          <h2>More Work</h2>
        </div>
        <div class="more-grid">
          <a
            v-for="(work, i) in moreWorks"
            :key="i"
            class="more-card"
            :href="work.url"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            :data-aos-delay="(i % 4) * 70"
          >
            <div class="more-card__thumb">
              <img v-if="work.img" :src="work.img" :alt="work.title" />
            </div>
            <div class="more-card__info">
              <div class="more-card__header">
                <div class="more-card__tt">
                  <p class="more-card__name">{{ work.title }}</p>
                  <p v-if="work.role" class="more-card__role">
                    {{ work.role }}
                  </p>
                </div>
                <img
                  src="@/assets/images/icon-arrow.svg"
                  class="more-card__arrow"
                  alt=""
                />
              </div>
              <div v-if="work.tags?.length" class="more-card__tags">
                <span v-for="tag in work.tags" :key="tag" class="tag">{{
                  tag
                }}</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({ once: true, duration: 600 });
});

const toolImages = import.meta.glob("../assets/images/About/*.svg", {
  eager: true,
  import: "default",
});
const toolImg = (file) => toolImages[`../assets/images/About/${file}`];

const workImages = import.meta.glob("../assets/images/work/*.svg", {
  eager: true,
  import: "default",
});
const workImg = (file) => workImages[`../assets/images/work/${file}`];

const tools = [
  { name: "Figma", img: toolImg("img-tool-Figma.svg") },
  { name: "Photoshop", img: toolImg("img-tool-PS.svg") },
  { name: "Illustrator", img: toolImg("img-tool-AI.svg") },
  { name: "VS Code", img: toolImg("img-tool-VSCode.svg") },
  { name: "HTML5", img: toolImg("HTM5.svg") },
  { name: "SASS", img: toolImg("img-tool-SASS.svg") },
  { name: "Vue.js", img: toolImg("img-tool-Vue.svg") },
  { name: "Nuxt.js", img: toolImg("img-tool-Nuxt.svg") },
];

const experiences = [
  {
    period: "2024 – 2026",
    role: "Design Associate Manager",
    company: "正平整合行銷",
    desc: [
      "數位設計、網頁設計、前端程式，擔任小主管（管理四人以下）",
      "專案：新官網 / HPE Wellness / Vivotek / Liteon / 各種活動網頁",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Front-end Developer",
    company: "米蘭營銷",
    desc: [
      "前端網頁開發及切版、網頁互動特效",
      "專案：富邦金控 / Coke / 台新銀行 / 統一 iSharing / 信義房屋 / Lexus",
    ],
  },
  {
    period: "2019 – 2023",
    role: "Front-end Designer",
    company: "鉅亨投顧",
    desc: [
      "數位設計、網頁設計、前端程式",
      "專案：開戶優化 / 母子基金 / 自由 Pay / 企業平台 / ESG / 公版網頁 / 各種活動網頁",
    ],
  },
  {
    period: "2018 – 2019",
    role: "Web Designer",
    company: "百軒廣告",
    desc: [
      "數位設計、網頁設計、前端程式，參與提案並協助團隊取得華航年度千萬預算",
      "專案：華航 / 虎航 / 日韓觀光網站 / 長榮飯店 / 台灣高鐵 / 各種活動網頁",
    ],
  },
  {
    period: "2017 – 2018",
    role: "Front-end Designer",
    company: "成果行銷",
    desc: [
      "廣告模組、數位設計、HTML5 動畫，擔任小組長（管理四人以下）",
      "專案：金牌特務 / 死侍 / 亞太電信 / Banila co / 浪琴錶 / 澳航 / 星采醫美",
    ],
  },
  {
    period: "2015 – 2017",
    role: "Design Assistant",
    company: "Shopping99 耐德科技",
    desc: [
      "數位設計、網頁及 App UI 優化",
      "新商品開發：跨領域經驗包含文案、商品定位與目標客群分析",
    ],
  },
];

const featuredWorks = [
  {
    title: "MOVA",
    role: "行動金融 App",
    tags: ["UI/UX", "App"],
    img: workImg("Img-featured1.svg"),
    url: "https://www.behance.net/gallery/249987197/Mova-App",
  },
  {
    title: "鉅亨買基金",
    role: "品牌前導頁",
    tags: ["UI/UX", "Web", "Front-end", "RWD"],
    img: workImg("Img-featured2.svg"),
    url: "https://www.behance.net/gallery/250076371/Anuefund-",
  },
  {
    title: "Vivotek",
    role: "企業活動網站",
    tags: ["UI/UX", "Web", "Front-end", "RWD"],
    img: workImg("Img-featured3.svg"),
    url: "#",
  },
];

const moreWorks = [
  {
    title: "正平官網",
    role: "形象網站",
    img: workImg("Img-access.svg"),
    tags: ["UI/UX", "Web", "RWD"],
    url: "#",
  },
  {
    title: "新安東京",
    role: "知識小學堂",
    img: workImg("Img-knowledge.svg"),
    tags: ["UI/UX", "Web", "Front-end", "RWD"],
    url: "#",
  },
  {
    title: "ESG 投資論壇",
    role: "活動網頁",
    img: workImg("Img-ESG.svg"),
    tags: ["UI/UX", "Web", "Front-end", "RWD"],
    url: "#",
  },
  {
    title: "鹿兒島",
    role: "觀光網站",
    img: workImg("Img-kagoshima.svg"),
    tags: ["UI/UX", "Web", "Front-end", "RWD"],
    url: "#",
  },
  {
    title: "岐阜縣",
    role: "觀光網站",
    img: workImg("Img-gifu.svg"),
    tags: ["UI/UX", "Web", "Front-end", "RWD"],
    url: "#",
  },
  {
    title: "富邦金控",
    role: "互動網頁",
    img: workImg("Img-fubon.svg"),
    tags: ["Web", "Front-end", "RWD"],
    url: "#",
  },
  {
    title: "信義房屋",
    role: "互動網頁",
    img: workImg("Img-xinyi.svg"),
    tags: ["Mobile", "Front-end", "RWD"],
    url: "#",
  },
  {
    title: "數位設計",
    role: null,
    img: workImg("Img-digital.svg"),
    tags: [],
    url: "#",
  },
];
</script>

<style lang="scss">
#index {
  .intro-wrap {
    position: relative;
    @include flex-center;
    flex-direction: column;
    gap: var(--spacing-section-100);
    width: 100%;
    padding: 0 $spacing-20 var(--spacing-section-100) $spacing-20;
    overflow: hidden;
    background: url("@/assets/images/about/bg.svg") no-repeat center
      center/cover;
    @include tablet {
      background: url(/powerful-ad.com/gaga_Jhuang/profile/_nuxt/assets/images/About/bg.svg)
        no-repeat center -250px / cover;
    }
  }

  .hero {
    position: relative;
    z-index: 1;

    &__inner {
      max-width: 910px;
      @include margin-auto;
      @include flex-center;

      @include tablet {
        flex-direction: column;
        gap: $spacing-20;
      }
    }

    &__left {
      white-space: nowrap;
      position: relative;
      z-index: 2;
      margin-right: -62px;
      @include tablet {
        text-align: center;
        margin-right: 0;
      }
    }

    &__title {
      font-family: "Roboto", sans-serif;
      font-size: 76px;
      font-weight: $font-weight500;
      color: $color-primary;
      line-height: 1;
      margin-bottom: $spacing-24;

      @include mobile {
        font-size: 56px;
        margin-bottom: $spacing-16;
      }
    }

    &__sub {
      margin-bottom: $spacing-32;
      @include tablet {
        margin-bottom: 0;
      }

      p {
        font-family: "Roboto", sans-serif;
        font-size: 48px;
        font-weight: $font-weight500;
        color: $color-primary;
        letter-spacing: 3%;
        @include mobile {
          font-size: $font-size-3xl;
        }

        .p-xs {
          font-size: 40px;
          font-weight: $font-weight500;
          @include mobile {
            font-size: $font-size-3xl;
          }
        }
        .sub-white {
          color: $color-white;
          font-weight: $font-weight500;
          @include tablet {
            color: $color-primary;
          }
        }
        &.sub-s {
          font-family: "Noto Sans TC";
          @include text-16;
          color: $color-primary;
          font-weight: $font-weight400;
          margin-top: $spacing-4;
          padding-left: $spacing-4;
        }
      }
    }

    &__right {
      position: relative;

      // @include tablet {
      //   width: 280px;
      // }
      // @include mobile {
      //   width: 220px;
      // }
    }

    &__photo {
      width: 345px;
    }

    &__badge {
      position: absolute;
      right: vwXL(-220);
      bottom: 1rem;
      border-radius: $radius-m;
      @include flex-style(center, center);
      gap: $spacing-12;
      white-space: nowrap;

      @include rwdWidth($rwdL) {
        display: none;
      }

      // @include tablet {
      //   right: -8px;
      // }

      &-num {
        font-family: "Roboto", sans-serif;
        font-size: 3rem;
        font-weight: $font-weight600;
        color: $color-secondary;
      }

      &-label {
        font-family: "Roboto", sans-serif;
        @include text-16;
        font-weight: $font-weight300;
        color: $color-tertiary;
        margin-top: 4px;
      }
    }
  }

  .btn-arrow {
    display: inline-flex;
    align-items: center;
    gap: $spacing-4;
    padding: $spacing-4 $spacing-24 6px;
    background: $color-primary;
    border-radius: $radius-pill;
    @include text-16;
    font-weight: $font-weight300;
    color: $color-white;
    transition: opacity $secondaryDuration ease;

    &:hover {
      opacity: 0.75;
    }

    &__icon {
      filter: brightness(0) invert(1);
      padding-top: 2px;
      transform: rotate(90deg);
      padding-left: 3px;
    }
    // @include tablet {
    //   display: none;
    // }
  }

  .section-title {
    display: inline-block;
    position: relative;
    text-align: center;

    h2 {
      font-family: "Roboto", sans-serif;
      font-size: 4rem;
      font-weight: $font-weight500;
      color: $color-primary;
      text-align: center;
      letter-spacing: 0.01em;
      &::after {
        content: "";
        width: 3.4rem;
        height: 1px;
        background: $color-secondary;
        position: absolute;
        bottom: -0.25rem;
        right: 0;
      }
      @include mobile {
        @include heading-1;
        &::after {
          width: 2.4rem;
          bottom: 0.25rem;
        }
      }
    }
  }

  .about {
    scroll-margin-top: 96px;
    position: relative;
    @include flex-style(center, center);
    flex-direction: column;
    gap: $spacing-36;
    text-align: center;
    @include mobile {
      gap: $spacing-24;
    }

    &__desc {
      @include text-18;
      color: $color-primary;

      @include mobile {
        @include text-16;
      }
    }

    &__tools {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: $spacing-20;

      @include mobile {
        gap: $spacing-20;
      }
    }
  }

  .tool-chip {
    width: 52px;
    @include flex-style(center, center);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  .page-inner {
    max-width: 1320px;
    @include margin-auto;
    padding: var(--spacing-section-100) $spacing-20;
    border-top: $color-divider solid 1px;
    @include flex-style(center, center);
    flex-direction: column;
    gap: var(--spacing-section-100);

    // @include mobile {
    //   // padding: var(--spacing-section-100) $spacing-20;
    // }
    .section-title {
      h2 {
        font-size: 2.5rem;
        &::after {
          width: 2.4rem;
          bottom: -0.15rem;
          right: 0;
        }
        @include mobile {
          @include heading-1;
          &::after {
            width: 2.4rem;
            bottom: 0.25rem;
          }
        }
      }
    }
  }

  .page-section {
    scroll-margin-top: 96px;
    @include flex-style(center, center);
    flex-direction: column;
    gap: $spacing-36;
    @include mobile {
      gap: $spacing-24;
      width: 100%;
    }
  }

  .exp-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-48 $spacing-32;

    @include mobile {
      grid-template-columns: 1fr;
      gap: $spacing-24;
    }
  }

  .exp-item {
    @include flex-style(space-between, flex-start);
    // gap: $spacing-16;

    &__content {
      @include flex-style(space-between, flex-start);
      flex-direction: column;
      gap: $spacing-8;
      flex: 1 0 0;
    }

    &__role {
      @include text-20;
      font-weight: $font-weight700;
      color: $color-primary;
    }

    &__company {
      @include text-16;
      font-weight: $font-weight400;
      color: $color-primary;
    }

    &__desc {
      p {
        @include text-14;
        color: $color-tertiary;
        font-weight: $font-weight400;
      }
    }

    &__period {
      @include text-14;
      color: $color-tertiary;
      flex-shrink: 0;
      white-space: nowrap;
      margin-top: $spacing-4;
    }
  }

  // FeaturedWorks
  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-32;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  .work-card {
    display: block;
    background: $color-white;
    border-radius: $radius-xl;
    overflow: hidden;
    @include img-shadow;
    cursor: pointer;
    transition: transform $secondaryDuration ease;

    &:hover {
      transform: translateY(-4px);
    }

    &__thumb {
      aspect-ratio: 149/82;
      width: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: $spacing-8;
      padding: $spacing-12 $spacing-12 $spacing-20;
    }

    &__header {
      @include flex-style(space-between, center);
    }

    &__tt {
      @include flex-style(flex-start, center);
      gap: $spacing-8;
      padding-left: $spacing-4;
    }

    &__name {
      @include text-20;
      font-weight: $font-weight700;
      color: $color-primary;
      white-space: nowrap;
    }

    &__role {
      @include text-16;
      font-weight: $font-weight400;
      color: $color-primary;
      white-space: nowrap;
    }

    &__arrow {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-8;
    }
  }

  // MoreWorks
  .more-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-32;

    @include tablet {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }
    @include rwdWidth(490) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }

  .more-card {
    display: block;
    background: $color-white;
    border-radius: $radius-xl;
    overflow: hidden;
    @include img-shadow;
    cursor: pointer;
    transition: transform $secondaryDuration ease;

    &:hover {
      transform: translateY(-3px);
    }

    &__thumb {
      aspect-ratio: 133 / 73;
      width: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: $spacing-8;
      padding: $spacing-12 $spacing-12 $spacing-20;
    }

    &__header {
      @include flex-style(space-between, center);
    }

    &__tt {
      @include flex-style(center, center);
      gap: $spacing-8;
      padding-left: $spacing-4;
    }

    &__name {
      @include text-20;
      font-weight: $font-weight700;
      color: $color-primary;
      white-space: nowrap;
      @include mobile {
        @include text-16;
      }
    }

    &__role {
      @include text-16;
      font-weight: $font-weight400;
      color: $color-primary;
      white-space: nowrap;
      @include mobile {
        @include text-14;
      }
    }

    &__arrow {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: $spacing-8;
    }
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 2px $spacing-12 3px;
    background: $color-bg;
    border-radius: $radius-pill;
    font-size: $font-size-xs;
    line-height: 1.4;
    color: $color-tertiary;
    letter-spacing: 0.24px;
    white-space: nowrap;
  }
}
</style>
