<template>
  <el-row class="bg-light-blue-300 min-h-screen">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="font-bold text-5xl text-gray-200 mb-4">欢迎回来</div>
        <div class="font-bold text-gray-700">O.C.M(OnlineCatManagement)赛博猫猫后台管理系统</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <el-card class="h-[600px] w-[400px]">
        <div class="from">
          <span class="h-[1px] w-16 bg-gray-200"></span>
          <span class="font-bold text-2xl text-dark-200">账号密码登录</span>
          <span class="h-[1px] w-16 bg-gray-200"></span>
        </div>
        <el-form
          ref="loginFromRef"
          :model="loginFrom"
          :label-position="labelPosition"
          label-width="auto"
          :rules="rules"
        >
          <el-form-item
            prop="username"
            label="用户名"
            :label-position="itemLabelPosition"
            class="my_4"
          >
            <el-input v-model="loginFrom.username">
              <template #prefix>
                <el-icon><Select /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label="密码"
            :label-position="itemLabelPosition"
            class="my-4"
          >
            <el-input v-model="loginFrom.password">
              <template #prefix>
                <el-icon><Unlock /></el-icon>
              </template>
            </el-input>
            {{ loginFrom.password }}
          </el-form-item>
          <el-form-item :label-position="itemLabelPosition">
            <el-button class="m-[0_auto]" @click="onSubmitted">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from "vue";
import { login } from "@/api/login";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const loginFromRef = ref(null);

const loginFrom = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [
    {
      required: true,
      message: "请填写用户名",
      trigger: "blur",
    },
    {
      min: 3,
      max: 10,
      // message: "请填写密码",
      message: "用户名长度不对",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请填写密码",
      trigger: "blur",
    },
    // {
    //   min: 3,
    //   max: 10,
    //   message: "密码长度不对",
    // },
  ],
});

//======================事件管理=====================
const onSubmitted = async () => {
  try {
    await loginFromRef.value.validate();
    const res = await login(loginFrom.username, loginFrom.password);
    ElMessage.success("登录成功");
    router.push("/");
  } catch (e) {
    console.log("e", e);
    ElMessage.error("错误");
  }
};
</script>

<style scoped>
.left {
  @apply flex justify-center items-center flex-col;
}
.right {
  @apply flex justify-center items-center flex-col;
}
.from {
  @apply flex justify-center items-center mb-8 space-x-2 mt-[150px];
}
</style>
