<!-- 지금 헤더가 홈이랑 create에 둘다 필요하다 !! -->
<template>
  <div>
    <a href="/">영화 목록</a>
    <a href="/create">영화 정보 추가</a>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<!--  header에 있는 Div에만 스타일 적용 !! -->
<style scoped>
div {
  /* background-color: pink; */
  width: 900px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
</style>
