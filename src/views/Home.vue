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
  name: 'HomeView',
  setup() {
    const code = ref('')
    const router = useRouter()

    const submitCode = async () => {
      try {
        const response = await axios.post('http://39.106.75.80/codeCheck', { code: code.value })
        if (response.data.success) {
          router.push('/success')
        } else {
          alert('验证码错误')
        }
      } catch (error) {
        console.error('提交验证码失败', error)
        alert('提交失败，请重试')
      }
    }

    return {
      code,
      submitCode
    }
  }
}
</script>