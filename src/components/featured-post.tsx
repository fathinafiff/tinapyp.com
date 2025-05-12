import { Heart, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      date: "Dec 23, 2023",
      title: "My solopreneur story: $0 to $65,000/month in 2 years",
      content:
        "After being fired by Tai Lopez in November 2021, I launched startups like a madman to buy freedom.",
      thumbnailUrl: "https://placehold.co/600x400",
      likes: 7,
      comments: 15,
      author: "Fathin Afif",
      category: "Solopreneur",
    },
    {
      id: 2,
      date: "Nov 29, 2023",
      title: "Ditch your free plan",
      content:
        "3% of users upgrade to paid plans. So if you have a $5/month plan, your average user is worth $0.15.",
      thumbnailUrl: "https://placehold.co/600x400",
      likes: 9,
      comments: 13,
      author: "Fathin Afif",
      category: "Solopreneur",
    },
    {
      id: 3,
      date: "Apr 08, 2024",
      title: "How to get your 1st customer",
      content:
        "If you have 0 audience and $0 for marketing, here are 4 marketing strategies I used to get customers for all my startups.",
      thumbnailUrl: "https://placehold.co/600x400",
      likes: 5,
      comments: 2,
      author: "Fathin Afif",
      category: "Solopreneur",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-lg overflow-hidden shadow-sm flex flex-col h-full"
        >
          <div className="p-4 flex flex-col h-full">
            <div className="relative h-48 bg-white p-4 border-b">
              <div className="absolute top-4 left-4 bg-yellow-500 text-xs font-bold px-2 py-1 rounded">
                {post.category}
              </div>
              <Image
                src={"https://placehold.co/600x400.png"}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="text-sm text-gray-500 mb-2">{post.date}</div>
            <h3 className="font-bold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{post.content}</p>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-4">
              {/* likes and comments */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Heart size={16} className="text-gray-500" />
                  <span className="text-xs text-gray-500">{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageSquare size={16} className="text-gray-500" />
                  <span className="text-xs text-gray-500">{post.comments}</span>
                </div>
              </div>

              {/* author */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs mr-2">
                  F
                </div>
                <span className="text-xs text-gray-500">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
