<script setup lang="ts">

import BannerImage1 from "@/assets/images/banner-8.webp"
import BannerImage2 from "@/assets/images/banner-7.webp"
import BannerImage3 from "@/assets/images/banner-9.webp"


</script>

<template>
    <div>
        <div
            class="mb-12 mt-24 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">

            <div class="mx-auto col-span-1 sm:col-span-2">
                <a class="h-full group flex justify-center relative overflow-hidden" href="/collections/new-sports">
                    <span
                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                        <span
                            style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                            <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                alt="" aria-hidden="true" :src="BannerImage1">
                        </span>

                        <img alt="New Sports" :srcset="BannerImage1" :src="BannerImage1" decoding="async"
                            data-nimg="intrinsic" class="bg-gray-300 object-cover w-full"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
                    </span>

                </a>
            </div>
            <div class="mx-auto col-span-full sm:col-span-5"><a
                    class="h-full group flex justify-center relative overflow-hidden" href="/collections/mens-collection">
                    <span
                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                        <span
                            style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                            <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                alt="" aria-hidden="true" :src="BannerImage2">
                        </span>

                        <img alt="New Sports" :srcset="BannerImage2" :src="BannerImage2" decoding="async"
                            data-nimg="intrinsic" class="bg-gray-300 object-cover w-full"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
                    </span>
                </a>
            </div>
            <div class="mx-auto col-span-1 sm:col-span-2"><a
                    class="h-full group flex justify-center relative overflow-hidden" href="/collections/dress-women">
                    <span
                        style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                        <span
                            style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                            <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                                alt="" aria-hidden="true" :src="BannerImage3">
                        </span>

                        <img alt="New Sports" :srcset="BannerImage3" :src="BannerImage3" decoding="async"
                            data-nimg="intrinsic" class="bg-gray-300 object-cover w-full"
                            style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%">
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>