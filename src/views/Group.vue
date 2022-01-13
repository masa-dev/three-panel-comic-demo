<template>
  <div id="group">
    <h2>グループ設定</h2>
    <GroupInfo />
    <GroupList />
  </div>
</template>

<script>
import GroupInfo from "./group/GroupInfo.vue";
import GroupList from "./group/GroupList.vue";

export default {
  components: {
    GroupInfo: GroupInfo,
    GroupList: GroupList,
  },
};
</script>
