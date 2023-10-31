<script setup >
import {RouterLink} from 'vue-router';
</script>

<template>
    <footer class="tw-pt-32">
      <div class="footer__area" data-bg-color="footer-bg">
        <div class="footer__bottom">
          <div class="container">
            <div class="footer__bottom-inner">
              <div class="row">
                <div class="col-sm-12">
                  <div class="footer__copyright">
                    <p><RouterLink to="/">© {{new Date().getFullYear()}} Trendy Shop</RouterLink> 
                      All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>

  
  