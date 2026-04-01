<template>
    <el-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>404 not found</p>
        </template>
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">返回主页面</el-button>
        </template>
      </el-result>
</template>

<script>
</script>