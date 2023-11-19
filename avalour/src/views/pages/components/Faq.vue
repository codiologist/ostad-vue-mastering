<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const faq_items = [
    {
        id: "One",
        title: "Can I cancel my account at any time?",
        show: true,
        desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
        parent: "faqaccordion",
    },
    {
        id: "Two",
        title: "What happens after the license expires?",
        desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
        parent: "faqaccordion",
    },
    {
        id: "Three",
        title: "Does Harry have any documentations?",
        desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
        parent: "faqaccordion",
    },
    {
        id: "Four",
        title: "How long do I get support & updates?",
        desc: "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.",
        parent: "faqaccordion",
    },
];
</script>

<template>
    <section id="faq" class="faq__area pb-120">
        <div class="container">
            <div class="faq__inner p-relative">
                <div class="faq__text d-none d-lg-block">
                    <h3 data-text="faq">faq</h3>
                </div>
                <div class="row justify-content-end">
                    <div class="col-xxl-9 col-xl-9 col-lg-9">
                        <div class="faq__wrapper tp-accordion pt-65">
                            <div class="accordion" id="faqaccordion">
                                <template v-for="(item, i) in faq_items" :key="i">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" :id="`heading${item.id}`">
                                            <button :class="`accordion-button ${item.show ? '' : 'collapsed'}`"
                                                type="button" data-bs-toggle="collapse"
                                                :data-bs-target="`#collapse${item.id}`"
                                                :aria-expanded="`${item.show ? 'true' : 'false'}`"
                                                :aria-controls="`collapse${item.id}`">
                                                {{ item.title }}
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h2>
                                        <div :id="`collapse${item.id}`"
                                            :class="`accordion-collapse collapse ${item.show ? 'show' : ''}`"
                                            :aria-labelledby="`heading${item.id}`" :data-bs-parent="`#${item.parent}`">
                                            <div class="accordion-body">
                                                <p>{{ item.desc }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  