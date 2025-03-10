<template>
  <div>
    <h1>输入验证码</h1>
    <input v-model="code" placeholder="请输入验证码" />
    <button @click="submitCode">提交</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  name: 'HomeViewComponent', // 修改: 将组件名称更改为多词形式
  setup() {
    const code = ref('')
    const router = useRouter()

    const submitCode = async () => {
      try {
        console.log('Sending request with code:', code.value); // 添加调试信息
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/checkCode`, { code: code.value }, { // 修改URL以包含端口号
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        });
        console.log('Response received:', response.data); // 添加调试信息
        if (response.data.success) {
          router.push('/success');
        } else {
          alert('验证码错误');
        }
      } catch (error) {
        console.error('提交验证码失败', error);
        alert('提交失败，请重试');
      }
    };

    return {
      code,
      submitCode
    }
  }
}
</script>