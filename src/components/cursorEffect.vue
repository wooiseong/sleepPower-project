<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const cursorBig = document.getElementById('cursor-big'),
        cursorSmall = document.getElementById('cursor-small'),
        withClassHover = document.getElementsByClassName("cursor-hover"),
        withHover = [...withClassHover];

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseHover);
  document.addEventListener("mouseup", onMouseHoverOut);
  document.addEventListener("mouseenter", () => {
    cursorBig.style.opacity = 1;
    cursorSmall.style.opacity = 1;
  });
  document.addEventListener("mouseleave", () => {
    cursorBig.style.opacity = 0;
    cursorSmall.style.opacity = 0;
  });
  withHover.forEach((element) => {
    element.addEventListener("mouseover", onMouseHover);
    element.addEventListener("mouseout", onMouseHoverOut);
  })

  function onMouseMove(e) {
    cursorSmall.style.opacity = 1;
    gsap.to(cursorBig, 0.4, {
      x: e.clientX - 17,
      y: e.clientY - 17
    });
    gsap.to(cursorSmall, 0.1, {
      x: e.clientX - 4,
      y: e.clientY - 4
    });
  }
  function onMouseHover() {
    gsap.to(cursorBig, 0.3, {
      scale: 3
    });
  }
  function onMouseHoverOut() {
    gsap.to(cursorBig, 0.3, {
      scale: 1
    });
  }
})
</script>

<template>
  <div>
    <div class="custom-cursor d-none d-lg-block">
        <div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
        <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
      </div>
  </div> 
</template>