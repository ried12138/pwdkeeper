<template>
  <div class="home">
    <h1>验证码校验</h1>
    <input v-model="verifyCode" placeholder="请输入验证码" />
    <button @click="submitVerifyCode">提交</button>
    <p v-if="message" class="message">{{ message }}</p> <!-- 添加提示信息显示 -->
  </div>
</template>

<script>
import { sendRequest } from '@/utils/request';

export default {
  name: 'HomePage', // 修改: 将组件名称从 'Home' 改为 'HomePage'
  data() {
    return {
      verifyCode: '',
      message: '' // 添加提示信息数据
    };
  },
  methods: {
    submitVerifyCode() {
      const requestBody = { verifyCode: this.verifyCode };
      sendRequest('/webFront/verifyCode', requestBody)
        .then(response => {
          console.log('验证码校验成功', response);
          this.message = '欢迎光临'; // 设置提示信息
        })
        .catch(error => {
          console.error('验证码校验失败', error);
          this.message = error.message; // 设置错误提示信息
        });
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.message {
  margin-top: 20px;
  color: green;
}
</style>