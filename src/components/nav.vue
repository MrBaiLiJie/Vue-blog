<template>
  <div>
    <div class="nav">
      <div class="navContent">
        <el-row :gutter="20">
          <el-col :span="3">
            <img class="logo" src="../assets/logo.png" alt />
          </el-col>
          <el-col :span="16">
            <el-menu
              :router="true"
              :default-active="activeIndex"
              active-text-color="#409eff"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item
                :route="item.path"
                :index="item.index"
                v-for="item in list"
                :key="item.index"
              >{{item.navName}}</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5"></el-col>
          <el-col :span="4">
            <div class="nav-right">
              <el-button size="small" type="primary" @click="handleClick('login')">登录</el-button>
              <el-button size="small" type="danger" @click="handleClick('register')">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-dialog title :visible.sync="dialogTableVisible" class="dialog" v-if="handleFlag === 'login'">
      <login></login>
    </el-dialog>
    <el-dialog title :visible.sync="dialogTableVisible" class="dialogRegister" v-if="handleFlag === 'register'">
      <register></register>
    </el-dialog>
  </div>
</template>

<script>
import login from "./login.vue";
import register from "./register.vue";
export default {
  name: "nav",
  data() {
    return {
      activeIndex: "2",
      dialogTableVisible: false,
      visible: false,
      handleFlag: "",
      list: [
        {
          index: "1",
          path: "/",
          navName: "首页"
        },
        {
          index: "2",
          path: "article",
          navName: "文章"
        },
        {
          index: "3",
          path: "place",
          navName: "归档"
        },
        {
          index: "4",
          path: "project",
          navName: "项目"
        },
        {
          index: "5",
          path: "course",
          navName: "历程"
        },
        {
          index: "6",
          path: "leaveMessage",
          navName: "留言"
        },
        {
          index: "7",
          path: "about",
          navName: "关于"
        }
      ]
    };
  },
  methods: {
    handleSelect(val, oldVal) {
      // console.log(val, oldVal);
      this.activeIndex = val;
    },
    handleClick(value) {
      this.handleFlag = value;
      // console.log(this.handleFlag);
      this.dialogTableVisible = true;
    }
  },
  components: { login, register }
};
</script>

<style scoped lang="less">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .navContent {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }
  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;
    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }
    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}

.enter-slideUp,
.leave-slideDown {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1010;
}

.enter-slideUp {
  overflow: auto;
  visibility: visible;
  z-index: 1001;
  animation: slideUp 0.3s forwards;
}
.leave-slideDown {
  visibility: visible;
  z-index: 1001;
  animation: slideDown 0.3s forwards;
}
@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0.1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}
.mask-fade-out {
  animation: maskFadeOut 0.4s forwards;
}
@keyframes maskFadeOut {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
</style>
