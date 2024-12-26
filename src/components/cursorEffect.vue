<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const cursorSmall = document.getElementById('cursor-small'),
        withClassHover = document.getElementsByClassName("cursor-hover"),
        withHover = [...withClassHover];

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousedown", onMouseHover);
  document.addEventListener("mouseup", onMouseHoverOut);
  document.addEventListener("mouseenter", () => {
    cursorSmall.style.opacity = 1;
  });
  document.addEventListener("mouseleave", () => {
    cursorSmall.style.opacity = 0;
  });
  withHover.forEach((element) => {
    element.addEventListener("mouseover", onMouseHover);
    element.addEventListener("mouseout", onMouseHoverOut);
  })

  function onMouseMove(e) {
    cursorSmall.style.opacity = 1;
    gsap.to(cursorSmall, 0.3, {
      x: e.clientX - 5,
      y: e.clientY - 5
    });
  }
  function onMouseHover() {
    gsap.to(cursorSmall, 0.3, {
      scale: 3
    });
  }
  function onMouseHoverOut() {
    gsap.to(cursorSmall, 0.3, {
      scale: 1
    });
  }
})
</script>

<template>
  <div>
    <div class="custom-cursor d-none d-lg-block">
        <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
      </div>
  </div> 
</template>