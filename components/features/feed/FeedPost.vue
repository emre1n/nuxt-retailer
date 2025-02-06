<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex items-center space-x-3 mb-4">
      <img
        :src="post.authorAvatar"
        :alt="post.authorName"
        class="w-10 h-10 rounded-full"
      />
      <div>
        <h3 class="font-semibold">{{ post.authorName }}</h3>
        <p class="text-sm text-gray-500">{{ post.timestamp }}</p>
      </div>
    </div>
    <p class="text-gray-800">{{ post.content }}</p>
    <div class="mt-4 flex space-x-4">
      <Button variant="secondary" @click="handleLike(post.id)">
        Like ({{ post.likes }})
      </Button>
      <Button variant="secondary" @click="handleComment(post.id)">
        Comment ({{ post.comments }})
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from '@/components/ui/Button.vue';

  interface Post {
    id: number;
    authorName: string;
    authorAvatar: string;
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
  }

  const props = defineProps<{
    post: Post;
    handleLike: (postId: number) => void;
    handleComment: (postId: number) => void;
  }>();
</script>
