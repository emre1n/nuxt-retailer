<template>
  <div class="space-y-4">
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-white p-6 rounded-lg shadow"
    >
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

  // Mock data - replace with actual API calls
  const posts = ref<Post[]>([
    {
      id: 1,
      authorName: 'John Doe',
      authorAvatar: 'https://via.placeholder.com/40',
      content: 'Just launched our new product line! Check it out!',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 5,
    },
    {
      id: 2,
      authorName: 'Jane Smith',
      authorAvatar: 'https://via.placeholder.com/40',
      content:
        'Great meeting with our retail partners today. Exciting times ahead!',
      timestamp: '5 hours ago',
      likes: 24,
      comments: 8,
    },
  ]);

  const handleLike = (postId: number) => {
    // Implement like functionality
    console.log('Liked post:', postId);
  };

  const handleComment = (postId: number) => {
    // Implement comment functionality
    console.log('Comment on post:', postId);
  };
</script>
