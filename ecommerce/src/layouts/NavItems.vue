<script >
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import router from '../router/index'


</script>

<template>
    <ul>

        <li>
            <RouterLink to="/">
                Home
            </RouterLink>
        </li>

        <li>
            <RouterLink to="/products">
                Shop
            </RouterLink>
        </li>

        <li>
            <RouterLink to="/orders">
                Order
            </RouterLink>
        </li>


        <!-- <li v-for="(menu, i) in menuData" :key="i" :class="`has-dropdown ${menu.megaMenu ? 'has-mega-menu' : ''}`">
            <RouterLink :to="menu.link">
                {{ menu.title }}
            </RouterLink>
            <ul v-if="menu.hasDropdown" class="submenu">
                <li v-for="(sub, i) in menu.submenus" :key="i">
                    <RouterLink :to="sub.link">
                        {{ sub.title }}
                    </RouterLink>
                </li>
            </ul>
            <ul v-if="menu.mega_menus" class="mega-menu">
                <li v-for="(mega, i) in menu.mega_menus" :key="i">
                    <RouterLink :to="mega.link" class="mega-menu-title">
                        {{ mega.title }}
                    </RouterLink>
                    <ul>
                        <li v-for="(sub_mega, i) in mega.submenus" :key="i">
                            <RouterLink :to="sub_mega.link">
                                {{ sub_mega.title }}
                            </RouterLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>  -->
    </ul>
</template>
