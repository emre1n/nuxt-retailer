<template>
  <div class="space-y-4">
    <FeedPost
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :handleLike="handleLike"
      :handleComment="handleComment"
    />
  </div>
</template>

<script setup lang="ts">
  import FeedPost from './FeedPost.vue';
  import { ref } from 'vue';

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
      authorAvatar: 'https://placehold.co/40x40',
      content: 'Just launched our new product line! Check it out!',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 5,
    },
    {
      id: 2,
      authorName: 'Jane Smith',
      authorAvatar: 'https://placehold.co/40x40',
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
