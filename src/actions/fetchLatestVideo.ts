"use server";

type Video = {
  title: string;
  videoId: string;
  url: string;
  thumbnail: string;
};

export async function fetchLatestVideo(
  channelId: string
): Promise<Video | null> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  if (!API_KEY) throw new Error("Missing YOUTUBE_API_KEY");

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.items || data.items.length === 0) return null;

  const latestVideo = data.items[0];
  return {
    title: latestVideo.snippet.title,
    videoId: latestVideo.id.videoId,
    url: `https://www.youtube.com/watch?v=${latestVideo.id.videoId}`,
    thumbnail: latestVideo.snippet.thumbnails.high.url,
  };
}
