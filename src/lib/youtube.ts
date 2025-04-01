import axios from 'axios';
import { fetchMockVideos } from './mock-youtube-data';

// YouTube API configuration
// NOTE: You will need to replace this with your actual YouTube API key
const API_KEY = 'YOUR_YOUTUBE_API_KEY';

// Channel information
const CHANNEL_USERNAME = 'KunalKamra';  // From the URL: https://www.youtube.com/@KunalKamra
const CHANNEL_ID = 'UC6-qJbzTIcjTsw7RyyfJuKg'; // Kunal Kamra's channel ID

// Development mode flag - set to true to use mock data
const USE_MOCK_DATA = true; // Set to false when you have a valid API key

// Interface for YouTube video data
export interface YoutubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  views: string;
  likes: string;
  embedId: string;
  category: string;
}

// Function to format view counts
export const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};

// Function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Parse YouTube video into our format
const parseVideo = (item: any): YoutubeVideo => {
  const { id, snippet, statistics } = item;

  return {
    id: typeof id === 'object' ? id.videoId : id,
    title: snippet.title,
    description: snippet.description,
    publishedAt: snippet.publishedAt,
    thumbnail: snippet.thumbnails.high?.url || snippet.thumbnails.medium?.url || snippet.thumbnails.default?.url,
    views: statistics?.viewCount ? formatCount(parseInt(statistics.viewCount)) : 'N/A',
    likes: statistics?.likeCount ? formatCount(parseInt(statistics.likeCount)) : 'N/A',
    embedId: typeof id === 'object' ? id.videoId : id,
    category: categorizeVideo({ title: snippet.title, description: snippet.description } as YoutubeVideo)
  };
};

// Get channel ID from channel username (handle)
export const getChannelId = async (channelUsername: string): Promise<string | null> => {
  if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY') {
    console.warn('No YouTube API key provided, using hardcoded channel ID');
    return CHANNEL_ID; // Return the hardcoded ID as fallback
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&forUsername=${channelUsername}&part=id`
    );

    if (response.data.items && response.data.items.length > 0) {
      return response.data.items[0].id;
    }

    console.warn(`No channel found for username: ${channelUsername}, using hardcoded ID`);
    return CHANNEL_ID; // Fallback to hardcoded ID
  } catch (error) {
    console.error('Error fetching channel ID:', error);
    return CHANNEL_ID; // Fallback to hardcoded ID on error
  }
};

// Fetch videos from channel - will use mock data or real API based on USE_MOCK_DATA flag
export const fetchChannelVideos = async (maxResults: number = 12): Promise<YoutubeVideo[]> => {
  // Use mock data in development
  if (USE_MOCK_DATA) {
    console.log('Using mock YouTube data for development');
    return fetchMockVideos();
  }

  // Use real API in production
  try {
    console.log('Fetching real YouTube data from API');

    // Get channel ID from username if possible
    const channelId = await getChannelId(CHANNEL_USERNAME) || CHANNEL_ID;

    // Step 1: Get video IDs from the channel's uploads
    const searchResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
    );

    // Extract video IDs and basic info
    const videoIds = searchResponse.data.items.map((item: any) => item.id.videoId).join(',');

    // Step 2: Get detailed video information including statistics
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails,statistics`
    );

    // Process and return the videos
    return videosResponse.data.items.map(parseVideo);

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};

// Categorize videos based on title or description keywords
export const categorizeVideo = (video: YoutubeVideo): string => {
  const text = `${video.title} ${video.description}`.toLowerCase();

  if (text.includes('podcast') || text.includes('interview') || text.includes('conversation') || text.includes('speaks')) {
    return 'Interview';
  } else if (text.includes('live') || text.includes('show') || text.includes('tour')) {
    return 'Live Show';
  } else {
    return 'Stand-up';
  }
};