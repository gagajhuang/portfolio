<template>
  <footer id="footer">
    <div class="footer__inner">
      <div class="footer__title">
        <h2>Contact</h2>
      </div>

      <div class="footer__list">
        <div class="footer__content">
          <div class="footer__social">
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
            >
              <img src="@/assets/images/icon-behance.svg" alt="Behance" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <img src="@/assets/images/icon-github.svg" alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="@/assets/images/icon-linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
          <a href="mailto:gagajhuang@gmail.com" class="footer__email">
            gagajhuang@gmail.com
          </a>
        </div>
        <p class="footer__copyright">© 2026 Gaga All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
#footer {
  background: $color-primary;
  width: 100%;
  @include flex-center;
  flex-direction: column;
  padding: $spacing-48 0;
}

.footer__inner {
  max-width: 1320px;
  @include margin-auto;
  @include flex-style(center, flex-start);
  flex-direction: column;
  padding: 0 $spacing-20;
  gap: $spacing-36;

  @include mobile {
    gap: $spacing-24;
  }
}

.footer__title {
  display: inline-block;
  position: relative;
  text-align: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
    font-weight: $font-weight500;
    color: $color-white;
    text-align: center;
    letter-spacing: 0.01em;
    &::after {
      content: "";
      width: 2.4rem;
      height: 1px;
      background: $color-secondary;
      position: absolute;
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

.footer__list {
  @include flex-center;
  gap: $spacing-section-80;
  width: 100%;

  @include mobile {
    @include flex-style(center, flex-start);
    flex-direction: column;
    gap: $spacing-16;
  }
}

.footer__content {
  @include flex-style(flex-start, center);
  flex: 1 0 0;
  gap: $spacing-12;
}

.footer__social {
  @include flex-style(flex-start, center);
  gap: $spacing-8;
  flex-shrink: 0;

  a {
    display: block;
    width: 30px;
    height: 30px;
    transition: opacity $secondaryDuration ease;

    &:hover {
      opacity: 0.6;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.footer__email {
  @include text-16;
  font-weight: $font-weight400;
  color: $color-bg;
  transition: opacity $secondaryDuration ease;

  &:hover {
    opacity: 0.6;
  }
}

.footer__copyright {
  @include text-14;
  font-weight: $font-weight400;
  color: $color-tertiary;
  flex-shrink: 0;
}
</style>
