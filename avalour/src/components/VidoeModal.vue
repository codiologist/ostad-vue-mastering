
<script setup>

const props = defineProps({
  videoUrl: {
    type: String,
    default: 'https://www.youtube.com/watch?v=OrxmtDw4pVI',
  },
});

function playVideo() {
  const videoOverlay = document.querySelector("#video-overlay");
  let iframeElement = document.createElement("iframe");

  iframeElement.setAttribute("src", props.videoUrl);
  iframeElement.style.width = "60%";
  iframeElement.style.height = "80%";

  videoOverlay?.classList.add("open");
  videoOverlay.appendChild(iframeElement);
}

function closeVideo() {
  const videoOverlay = document.querySelector("#video-overlay.open"),
    iframeElement = document.querySelector("#video-overlay.open iframe");

  videoOverlay?.classList.remove("open");
  iframeElement?.remove();
}


defineExpose({
  playVideo,
  closeVideo
});
</script>

<template>
  <div id="video-overlay" class="video-overlay" @click="closeVideo">
    <a class="video-overlay-close" @click.prevent="closeVideo">×</a>
  </div>
</template>
