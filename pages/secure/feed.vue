<template>
  <div>
    <Header>
      <template #navigation>
        <!-- Add navigation items here if needed -->
      </template>
      <template #actions>
        <Button variant="primary" @click="handleLogout">Logout</Button>
      </template>
    </Header>

    <div class="p-8">
      <h1 class="text-4xl font-bold mb-8">Welcome to Retailer</h1>
      <div class="max-w-3xl mx-auto">
        <Feed />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import Button from '@/components/ui/Button.vue';
  import Header from '@/components/layout/Header.vue';
  import Feed from '@/components/features/feed/Feed.vue';

  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };
</script>
