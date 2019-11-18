<template>
  <div class="login">
    <el-form ref="loginForm" class="loginBox" :model="form" :rules="rules">
      <h3 class="loginTitle">欢迎登录</h3>
      <el-form-item label="Email" prop="username">
        <el-input placeholder="请输入邮箱" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "邮箱不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      },
      visable: false,
      dialogTableVisible: false
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {
    submit(formName) {
      // 为表单绑定验证功能
      const reg = new RegExp("/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/");
      if (!reg.test(this.form.username)) {
        alert('请输入格式正确的邮箱')
      }
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
      //     this.$router.push("/HelloBlog");
      //   } else {

      //     return false;
      //   }
      // });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  margin: 0 auto;
  .loginBox {
    border: 1px solid #dcdfe6;
    width: 350px;
    margin: 0 auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    .loginTitle {
      text-align: center;
      margin: 0 auto 40px auto;
      color: #303133;
    }
  }
}
</style>
