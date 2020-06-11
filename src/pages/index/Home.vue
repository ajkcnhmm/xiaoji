<template>
  <div>
    <ul>
      <li>辣眼睛</li>
      <li>辣眼睛</li>
      <li>辣眼睛</li>
      <li>辣眼睛</li>
    </ul>
    <div class="ecahrts"></div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="less" scoped>
div {
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 250px;
      height: 140px;
      border: 1px solid #000;
      background: black;
      color: red;
      font-size: 40px;
      line-height: 140px;
      text-align: center;
    }
  }
  .ecahrts{
      border: 1px solid #000;
      width: 1000px;
      height: 400px;
      background: pink;
  }
}
</style>
