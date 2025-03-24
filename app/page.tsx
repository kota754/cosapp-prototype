'use client';

import Link from "next/link";
import { models } from "./model/data";
import { useState } from "react";

export default function HomePage() {
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (slug: string) => {
    setLikes((prev) => ({
      ...prev,
      [slug]: (prev[slug] || 0) + 1,
    }));
  };

  return (
    <main className="p-8 grid gap-6 md:grid-cols-2">
      {models.map((model) => (
        <div key={model.slug}>
          <Link href={`/model/${model.slug}`}>
            <div className="rounded-2xl border p-4 hover:shadow-lg transition cursor-pointer">
              <img
                src={model.avatar}
                alt={model.name}
                className="rounded-xl w-full h-60 object-cover mb-2"
              />
              <h2 className="text-xl font-bold">{model.name}</h2>
              <div className="flex gap-2 mt-1">
                {model.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* 💖 いいねボタン */}
          <button
            onClick={() => handleLike(model.slug)}
            className="mt-2 text-sm text-pink-600 hover:underline"
          >
            💖 いいね {likes[model.slug] || 0}
          </button>
        </div>
      ))}
    </main>
  );
}
