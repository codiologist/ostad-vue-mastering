<script setup>
const menuItems = [
  {
    id: 1,
    name: "Home",
    hash: "#home",
    ariaCurrent: true,
    dataAnchor: false
  },
  {
    id: 2,
    name: "Key Features",
    hash: "#features",
    ariaCurrent: false,
    dataAnchor: true
  },
  {
    id: 3,
    name: "Pricing",
    hash: "#pricing",
    ariaCurrent: false,
    dataAnchor: true
  },
  {
    id: 4,
    name: "Testimonial",
    hash: "#testimonial",
    ariaCurrent: false,
    dataAnchor: true
  },
  {
    id: 5,
    name: "FAQ",
    hash: "#faq",
    ariaCurrent: false,
    dataAnchor: true
  },
]
</script>



<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center fw-bold fs-2" href="/">
          <div class="text-1000"><span class="text-warning">App</span>Lab</div>
        </a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto pt-2 pt-lg-0">
            <li v-for="item in menuItems" :key="item.id" class="nav-item" :data-anchor="`${true == item.dataAnchor ? 'data-anchor': ''}`">
              <a class="nav-link fw-medium active" :aria-current="`${true == item.ariaCurrent ? 'page': ''}`" :href="item.hash">{{item.name}}</a>
            </li>
          </ul>
          <form class="ps-lg-5">
            <button class="btn btn-lg btn-primary rounded-pill order-0" type="button">Login</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
