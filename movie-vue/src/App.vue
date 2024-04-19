<template>
  <!-- 나헤더를 넣고싶다 !! -->
  <router-view name="header" />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>

<!-- 
  import Info from "@/components/Info.vue";
export default {
  name: "App",
  // useState
  data() {
    return {
      message: "",
      // React에서는 const [movie, setMovie] = useSate({})
      movie: {},
    };
  },
  // 이순서로 진행된다 !!
  // beforeCreate ->  (created) ->  beforeMount -> (mounted)
  //                                              화면에 올라왔을때
  // 데이터가 변경되어서 바뀌었을때
  // beforeUpdate -> (updated)
  // 강제종료 되는 그시점
  // beforeUnmount(vue 2 버전은 beforeDestory) -> unmounted(destoryed)
  // 이게 다 라이프사이클이다
  mounted() {
    this.movie = {
      title: "쿵푸펜더4",
      genre: "애니메이션",
      actor: "잭 블랙, 아콰피나",
    };
  },
  // Components등록은
  components: {
    info: Info,
    //
  },
  methods: {
    childHandler(message) {
      this.message = message; // 메세지 담기 !!
    },
  },
}; -->
