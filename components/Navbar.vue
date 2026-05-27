<template>
  <header id="navbar">
    <nav class="navbar__bar" :class="{ 'navbar__bar--scrolled': scrolled }">
      <div class="navbar__logo">
        <img src="@/assets/images/logo.svg" alt="Gaga" />
      </div>

      <ul class="navbar__links">
        <li><a href="#works">WORK</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#footer">CONTACT</a></li>
      </ul>

      <div class="navbar__right">
        <a
          href="/resume.pdf"
          class="btn-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <div class="btn-resume__icon">
            <img src="@/assets/images/icon-arrow.svg" alt="" />
          </div>
        </a>
        <button
          class="navbar__hamburger"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <img
            v-if="!menuOpen"
            src="@/assets/images/icon-open.svg"
            alt="open"
          />
          <img v-else src="@/assets/images/icon-close.svg" alt="close" />
        </button>
      </div>
    </nav>

    <Transition name="slide-down">
      <div v-if="menuOpen" class="navbar__mobile">
        <ul>
          <li><a href="#works" @click="menuOpen = false">WORK</a></li>
          <li><a href="#about" @click="menuOpen = false">ABOUT</a></li>
          <li><a href="#contact" @click="menuOpen = false">CONTACT</a></li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const menuOpen = ref(false);
const scrolled = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 0;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style lang="scss" scoped>
#navbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  
}

.navbar__bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  // align-items: center;
  padding: $spacing-28 $spacing-40;
  width: 100%;
  background: rgba($color-white, 0.5);
  backdrop-filter: blur(15px); // 背景模糊
  

  transition: padding $secondaryDuration ease;

  &--scrolled {
    padding: $spacing-12 $spacing-40;
  }

  @include mobile {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: $spacing-16 $spacing-20;
  }
}

.navbar__logo {
  width: 66px;
  @include mobile {
    width: 50px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
}

.navbar__links {
  @include flex-style(center, center);
  gap: $spacing-32;

  @include mobile {
    display: none;
  }

  li a {
    @include flex-style(center, center);
    min-width: 100px;
    @include text-20;
    font-weight: $font-weight600;
    color: $color-primary;
    text-align: center;
    white-space: nowrap;
    transition: opacity $secondaryDuration ease;

    &:hover {
      opacity: 0.5;
    }
  }
}

.navbar__right {
  @include flex-style(flex-end, center);
  @include mobile {
    gap: $spacing-8;
  }
}

.btn-resume {
  display: inline-flex;
  align-items: center;
  gap: $spacing-4;
  padding: $spacing-4 $spacing-24 0.375rem;
  @include border-all(1, $color-secondary);
  border-radius: $radius-pill;
  @include text-16;
  color: $color-secondary;
  white-space: nowrap;
  transition: all $secondaryDuration ease;

  &__icon {
    padding-top: 0.375rem;
  }
  &:hover {
    background: $color-primary;
    border-color: $color-primary;
    color: $color-white;

    .btn-resume__icon {
      filter: brightness(0) invert(1);
    }
  }

  // @include mobile {
  //   display: none;
  // }
}

.navbar__hamburger {
  display: none;
  cursor: pointer;
  width: 45px;
  height: 45px;
  background: transparent;
  img {
    width: 54%;
    display: block;
  }

  @include mobile {
    @include flex-style(center, center);
  }
}

.navbar__mobile {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba($color-white, 0.5);
  backdrop-filter: blur(15px); // 背景模糊
  border-top: 1px solid #f0f0f0;
  padding: $spacing-24 $spacing-36;
  text-align: center;
  overflow: hidden;

  @media (min-width: #{$rwdS + 1}px) {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li a {
    font-size: 18px;
    font-weight: 700;
    color: $color-primary;
    text-decoration: none;
    letter-spacing: 0.4px;
    transition: opacity 0.35s ease;

    &:hover {
      opacity: 0.5;
    }
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height $secondaryDuration ease, opacity 0.25s ease;
  overflow: hidden;
  max-height: 300px;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
