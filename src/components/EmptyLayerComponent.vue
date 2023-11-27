<template>
    <div class="empty-layer-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M62.9999 90.3C61.1999 91.7 58.6499 91.7 56.8499 90.3L26.0999 66.4C24.2999 65 21.7999 65 19.9999 66.4C17.4499 68.4 17.4499 72.25 19.9999 74.25L53.7999 100.55C57.3999 103.35 62.4499 103.35 66.0999 100.55L99.8999 74.25C102.45 72.25 102.45 68.4 99.8999 66.4L99.8499 66.35C98.0499 64.95 95.5499 64.95 93.7499 66.35L62.9999 90.3ZM66.1499 75.2L99.9499 48.9C102.5 46.9 102.5 43 99.9499 41L66.1499 14.7C62.5499 11.9 57.4999 11.9 53.8499 14.7L20.0499 41.05C17.4999 43.05 17.4999 46.95 20.0499 48.95L53.8499 75.25C57.4499 78.05 62.5499 78.05 66.1499 75.2Z"
                fill="#A0A3BD" />
        </svg>
        <h1>Add layers please</h1>
        <p>Please use fields above to add your layer links or image</p>
    </div>
</template>
<script>

export default {
    name: 'EmptyLayerComponent',
    data() {
        return {}
    }
}
</script>

<style scoped>
.empty-layer-wrapper {
    position: absolute;
    top: 40%;
    left: 35%;
}

.empty-layer-wrapper h1 {
    margin-top: 25px;
    color: #4E4B66;
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
}

.empty-layer-wrapper p {
    margin-top: 7px;
    color: #6E7191;
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
}
</style>