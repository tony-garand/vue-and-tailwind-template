<template>
    <div :id="id" class="pin-t fixed z-50 hidden overflow-y-auto sm-blue-overlay" style="width: 100vw; height: 100vh;">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'modal',
    props: ['id']
}
</script>

