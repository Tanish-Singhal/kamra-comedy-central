import { Skeleton } from "@/components/ui/skeleton";

interface ContentLoaderProps {
  type: "card" | "text" | "image" | "video";
  count?: number;
}

export const ContentLoader = ({ type, count = 1 }: ContentLoaderProps) => {
  const renderLoader = () => {
    switch (type) {
      case "card":
        return (
          <div className="bg-card/50 border border-border rounded-xl p-4 shadow-sm overflow-hidden">
            <Skeleton className="h-48 w-full rounded-lg mb-4" />
            <Skeleton className="h-6 w-3/4 rounded-md mb-2" />
            <Skeleton className="h-4 w-1/2 rounded-md mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Skeleton className="h-6 w-1/4 rounded-md" />
              <Skeleton className="h-10 w-1/3 rounded-md" />
            </div>
          </div>
        );
      case "image":
        return <Skeleton className="h-64 w-full rounded-xl" />;
      case "video":
        return <Skeleton className="aspect-video w-full rounded-xl" />;
      case "text":
      default:
        return (
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </div>
        );
    }
  };

  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="animate-pulse">
            {renderLoader()}
          </div>
        ))}
    </>
  );
};
