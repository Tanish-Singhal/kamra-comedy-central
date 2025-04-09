import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Youtube, Loader2 } from "lucide-react";
import { mockYoutubeVideos } from "@/lib/mock-youtube-data";
import { YoutubeVideo } from "@/lib/youtube";

const VideosGrid = () => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Simulate loading videos (using the mock data directly)
    const loadVideos = async () => {
      try {
        setLoading(true);
        // Short delay to simulate loading
        await new Promise((resolve) => setTimeout(resolve, 800));
        setVideos(mockYoutubeVideos);
      } catch (err) {
        console.error("Failed to load videos:", err);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  // Extract unique categories
  const categories = Array.from(
    new Set(videos.map((video) => video.category.toLowerCase()))
  );

  // Filter videos by category
  const filteredVideos =
    activeTab === "all"
      ? videos
      : videos.filter((video) => video.category.toLowerCase() === activeTab);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-center">
          <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-comedy-orange" />
          <p className="text-muted-foreground">Loading videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Kunal Kamra Videos</h2>

      {/* Simple Category Tabs */}
      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-8"
      >
        <TabsList className="mb-4 flex overflow-x-auto space-x-2">
          <TabsTrigger value="all">All Videos</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredVideos.length} {activeTab !== "all" ? activeTab : ""}{" "}
          videos
        </p>

        {/* Directly Embedded Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-card rounded-lg overflow-hidden shadow-md border border-border"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div>{video.views} views</div>
                  <div className="flex items-center">
                    <span className="bg-comedy-orange/10 text-comedy-orange text-xs px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>

      {/* YouTube Channel Link */}
      <div className="mt-12 text-center">
        <a
          href="https://www.youtube.com/@KunalKamra"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Youtube size={20} />
            Visit YouTube Channel
          </Button>
        </a>
      </div>
    </div>
  );
};

export default VideosGrid;
