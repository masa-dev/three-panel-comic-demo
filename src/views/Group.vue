<template>
  <div id="group">
    <h2>グループ設定</h2>
    <GroupInfo />
    <MemberList />
  </div>
</template>

<script>
import GroupInfo from "./group/GroupInfo.vue";
import MemberList from "./group/MemberList.vue";

export default {
  components: {
    GroupInfo: GroupInfo,
    MemberList: MemberList,
  },
};
</script>
