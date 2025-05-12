import { fetchLatestVideo } from "@/actions/fetchLatestVideo";

const LatestVideo = async () => {
  const channelId = "UCZAJSHgLFBtImrxoV70eW6w";
  const video = await fetchLatestVideo(channelId);

  if (!video) return <p>No video found</p>;

  return (
    <div className="w-full rounded-lg overflow-hidden bg-black">
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
    </div>
  );
};

export default LatestVideo;
