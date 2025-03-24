import { models } from "../data";

// 静的パスを生成
export async function generateStaticParams() {
  return models.map((model) => ({
    slug: model.slug,
  }));
}

// props の型
type Props = {
  params: {
    slug: string;
  };
};

// ✅ async を絶対に外すこと！
export default function ModelDetailPage({ params }: Props) {
  const model = models.find((m) => m.slug === params.slug);

  if (!model) {
    return <div className="p-8">モデルが見つかりませんでした。</div>;
  }

  return (
    <div className="p-8">
      <img
        src={model.avatar}
        alt={model.name}
        className="w-60 h-60 object-cover rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
      <div className="flex gap-2 mb-4">
        {model.tags.map((tag) => (
          <span key={tag} className="text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
      <p>{model.description}</p>
    </div>
  );
}
