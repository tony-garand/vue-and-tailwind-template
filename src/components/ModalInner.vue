<template>
    <div :id="id" class="relative mx-auto md:mb-16 hidden w-full md:mt-64 mt-32" style="max-width:590px;">
        <slot></slot>
        <div class="close-modal absolute pin-b pin-r text-grey4 underline transition p-8 cursor-pointer pb-6">
            <!-- <div>&times;</div> -->
            <div>Close</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-inner',
    props: ['id']
}
</script>
