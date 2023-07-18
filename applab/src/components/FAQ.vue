<script setup>

const faqs = [
    {
        id: 1,
        title: "How to contact with riders emergency?",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win- win survival strategies to ensure proactive domination.At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.User generated content in real - time will have multiple touchpoints for offshoring.",
        show: "show",
    },
    {
        id: 2,
        title: "App installation failed, how to update system information?",
        description: "You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.",
        show: "",
    },
    {
        id: 3,
        title: "Website reponse taking time, how to improve?",
        description: "isputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.",
        show: "",
    },
    {
        id: 4,
        title: "New update fixed all bug and issues",
        description: "There are no additional fees for using our mobile SDKs or to accept payments using consumer wallets like Apple Pay or Google Pay.",
        show: "",
    },
    {
        id: 5,
        title: "App installation failed, how to update system information?",
        description: "You can issue either partial or full refunds. There are no fees to refund a charge, but the fees from the original charge are not returned.",
        show: "",
    },
];

</script>

<template>
    <section class="py-8" id="faq">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 text-center mb-3">
                    <h6 class="fw-bold fs-4 display-3 lh-sm mb-3">Frequently asked questions</h6>
                    <p class="mb-5">The rise of mobile devices transforms the way we consume information entirely and
                        the world's most elevant channels such as Facebook.</p>
                </div>
            </div>
            <div class="row flex-center">
                <div class="col-lg-9">
                    <div class="accordion" id="accordionExample">
                        <div v-for="(item, index) in faqs" :key="item.id" class="accordion-item mb-2">
                            <h2 class="accordion-header" :id="`heading${item.id}`">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="`#collapse${item.id}`" aria-expanded="true"
                                    :aria-controls="`collapse${item.id}`">
                                    <span class="mb-0 fw-bold text-start fs-1 text-1000">{{ item.title }}</span>
                                </button>
                            </h2>
                            <div class="accordion-collapse collapse" :class="item.show" :id="`collapse${item.id}`"
                                :aria-labelledby="`heading${item.id}`" data-bs-parent="#accordionExample">
                                <div class="accordion-body bg-100">{{ item.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
