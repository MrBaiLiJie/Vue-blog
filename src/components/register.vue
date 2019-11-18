<template>
  <div class="register">
    <el-container>
      <el-form ref="registerForm" class="registerBox" :model="form" :rules="rules">
        <h3 class="registerTitle">欢迎注册</h3>
        <el-form-item label="昵称" prop="name">
          <el-input placeholder="请输入昵称"  v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="username">
          <el-input placeholder="请输入邮箱"  v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码"  v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit()">注册</el-button>
        </el-form-item>
      </el-form>
    </el-container>
    <!-- <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>-->
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form:{
        name:'',
        username:'',
        password:''
      },
      rules: {
        name: [
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        username: [
          { required: true, message: "邮箱不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    // 表单验证
    submit() {
      const reg = new RegExp("/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/");
      if (!reg.test(this.form.username)) {
        alert("请输入格式正确的邮箱");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.register {
  margin: 0 auto;
  .registerBox {
    border: 1px solid #dcdfe6;
    width: 350px;
    margin: 0 auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    .registerTitle {
      text-align: center;
      margin: 0 auto 40px auto;
      color: #303133;
    }
  }
}
</style>
