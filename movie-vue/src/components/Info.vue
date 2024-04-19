<template>자식에서 보여줌 : {{ data }}</template>
<script>
export default {
  name: "InfoComponent",
  props: {
    data: Object, // 우리는 무비라는 객체 데이터를 보내고 있는거다 !!
  },
  data() {
    return {
      //변수에 접근할때
      childMessage: "하위 컴포넌트에서 상위 컴포넌트로 !",
    };
  },
  created() {
    this.sendParent();
  },
  // 메서드 역할을 한다. => 기능에 접근할때
  methods: {
    // 자식이 부모에게 보낸다!
    sendParent() {
      //        이벤트명 / 보낼 데이터
      this.$emi("child", this.childMessage);
    },
  },
};
</script>
<style></style>
