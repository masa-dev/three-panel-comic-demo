<template>
  <div v-if="isAdmin">
    <h3>グループの編集</h3>
    <p>グループの情報を編集できます。</p>
    <div class="group-input-area">
      <div class="group-input-wrapper">
        <label for="group-name-input">グループ名</label><br />
        <input type="text" id="group-name-input" :value="group.name" />
      </div>
      <div class="group-input-wrapper">
        <label for="group-description-input">グループ説明</label><br />
        <textarea
          id="group-description-input"
          rows="5"
          :value="group.description"
        ></textarea>
      </div>
      <div class="group-input-wrapper">
        <button @click="sendGroupInfo()">変更</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import checkNgWords from "@/util/checkNgWords";

export default {
  data() {
    return {
      group: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    sendGroupInfo() {
      const groupRef = firebase.database().ref("group");
      const name = document.getElementById("group-name-input").value;
      const description = document.getElementById(
        "group-description-input"
      ).value;

      // NGワードが含まれている
      if (checkNgWords(name) || checkNgWords(description)) {
        alert("NGワードが含まれています。");
        return;
      }
      // 空白の入力欄がある
      else if (name.length === 0 || description.length === 0) {
        alert("一文字以上入力して下さい");
        return;
      }
      // 値がまったく同じ場合は何もしない
      else if (
        name === this.group.name &&
        description === this.group.description
      ) {
        return;
      }
      // 入力値が正常
      else {
        if (confirm("グループ情報を編集しますが、よろしいですか？")) {
          groupRef.update({
            name: name,
            description: description,
          });
        }
      }
    },
  },
  computed: {
    isAdmin() {
      return this.$store.state.user.isAdmin;
    },
  },
  mounted() {
    const groupRef = firebase.database().ref("group");

    groupRef.get().then((snapshot) => {
      const { name, description } = snapshot.val();
      this.group.name = name;
      this.group.description = description;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixin";

.group-input-area {
  .group-input-wrapper {
    margin-left: 0.5rem;

    input {
      @include input();
      width: 400px;
      margin: {
        left: 0;
        bottom: 1.2rem;
      }
    }

    textarea {
      @include input();
      width: 400px;
      margin: {
        left: 0;
        bottom: 1.2rem;
      }
    }

    button {
      @include button();
      margin-left: 0.5rem;
    }
  }
}

@media (max-width: $responsiveMainWidth) {
  .group-input-area {
    .group-input-wrapper {
      input {
        width: 90%;
      }

      textarea {
        width: 90%;
      }
    }
  }
}
</style>
