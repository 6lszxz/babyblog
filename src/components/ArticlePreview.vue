<script setup>

</script>

<template>
    <div id="informationShow">
        <h2>
            <slot name="title">标题</slot>
        </h2>
        <div>
            <slot name="content">内容</slot>
        </div>
    </div>
</template>

<style scoped>
#informationShow{
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 15vh;
    box-shadow: 2px 2px 5px gray;
    border-radius: 5px;
    background-color: #f9f7f0;;
}

#informationShow:hover{
    cursor: pointer;
}
</style>