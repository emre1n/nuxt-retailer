import { useHttp } from '@/services/http';

interface Post {
  id: number;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

interface CreatePostPayload {
  content: string;
}

interface CommentPayload {
  content: string;
}

interface FeedResponse {
  posts: Post[];
  hasMore: boolean;
  nextCursor?: string;
}

interface PostResponse {
  post: Post;
}

export const useFeedApi = () => {
  const subdomain = '/feeds';
  const http = useHttp();

  const handleError = (error: any) => {
    if (error.status === 401) {
      throw new Error('Unauthorized access');
    }
    if (error.status === 404) {
      throw new Error('Post not found');
    }
    if (error.status === 422) {
      throw new Error('Invalid input format');
    }
    throw new Error('An error occurred while processing your request');
  };

  const getFeedPosts = async (cursor?: string) => {
    try {
      const queryParams = cursor ? `?cursor=${cursor}` : '';
      return await http<FeedResponse>(`${subdomain}/posts${queryParams}`, {
        method: 'GET',
      });
    } catch (error) {
      handleError(error);
    }
  };

  const getPost = async (postId: number) => {
    try {
      return await http<PostResponse>(`${subdomain}/posts/${postId}`, {
        method: 'GET',
      });
    } catch (error) {
      handleError(error);
    }
  };

  const createPost = async (payload: CreatePostPayload) => {
    try {
      return await http<PostResponse>(`${subdomain}/posts`, {
        method: 'POST',
        body: payload,
      });
    } catch (error) {
      handleError(error);
    }
  };

  const likePost = async (postId: number) => {
    try {
      return await http<PostResponse>(`${subdomain}/posts/${postId}/like`, {
        method: 'POST',
      });
    } catch (error) {
      handleError(error);
    }
  };

  const unlikePost = async (postId: number) => {
    try {
      return await http<PostResponse>(`${subdomain}/posts/${postId}/unlike`, {
        method: 'POST',
      });
    } catch (error) {
      handleError(error);
    }
  };

  const addComment = async (postId: number, payload: CommentPayload) => {
    try {
      return await http<PostResponse>(`${subdomain}/posts/${postId}/comments`, {
        method: 'POST',
        body: payload,
      });
    } catch (error) {
      handleError(error);
    }
  };

  return {
    getFeedPosts,
    getPost,
    createPost,
    likePost,
    unlikePost,
    addComment,
  };
};
