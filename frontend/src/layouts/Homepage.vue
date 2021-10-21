<template>
  <main
    class="dark:bg-gray-800 font-mono bg-white relative overflow-x-hidden h-screen"
  >
    <header class="h-24 sm:h-32 flex items-center z-30 w-full md:absolute">
      <div class="container mx-auto px-6 flex items-center justify-between">
        <div
          class="uppercase text-gray-800 dark:text-white font-black text-3xl flex items-center"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 1792 1792"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
            ></path>
          </svg>
          <span class="text-xs ml-3 mt-1"> carlosmls.crc@gmail.com </span>
        </div>
        <div class="flex items-center">
          <nav
            class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden"
          >
            <g-link class="py-2 px-6 flex hover:text-black" to="/">Home</g-link>
            <g-link class="py-2 px-6 flex hover:text-black" to="/blog"
              >Blog</g-link
            >
            <g-link class="py-2 px-6 flex hover:text-black" to="/contact"
              >Contact</g-link
            >
          </nav>
          <button class="lg:hidden flex flex-col ml-4">
            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
          </button>
        </div>
      </div>
    </header>
    <div class="area">
      <ul class="circles">
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
        <li :class="'bg-yellow-500 h-1 w-1'"></li>
      </ul>
    </div>
    <div class="flex relative z-20 items-center">
      <div
        class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
      >
        <slot />
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: ["color"],
  data: function () {
    return {
      bg_color: "yellow",
    };
  },
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.area {
  position: absolute;
  width: 100vw;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}
@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
