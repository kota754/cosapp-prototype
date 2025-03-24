import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Lock } from "lucide-react";

export default function ModelProfilePage() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* モデル基本情報 */}
      <div className="flex items-center gap-4">
        <img src="/model-avatar.jpg" alt="Model Avatar" className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-bold">りおたん</h2>
          <p className="text-sm text-muted-foreground">私服・制服・ナースコス受付中</p>
          <div className="mt-2 flex gap-2">
            <Badge>認証済み</Badge>
            <Badge variant="secondary">#ナース</Badge>
            <Badge variant="secondary">#私服</Badge>
          </div>
        </div>
      </div>

      {/* リクエスト受付状況 */}
      <Tabs defaultValue="requests">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="requests">リクエスト</TabsTrigger>
          <TabsTrigger value="gallery">写真</TabsTrigger>
          <TabsTrigger value="about">プロフィール</TabsTrigger>
        </TabsList>

        <TabsContent value="requests">
          <Card>
            <CardContent className="p-4 space-y-2">
              <p className="text-base font-semibold">📥 いいね型リクエスト</p>
              <div className="flex justify-between items-center">
                <span>ナースポーズ（上目遣い）</span>
                <span className="text-sm">82 / 100 ❤️</span>
              </div>
              <Button variant="secondary" className="w-full">応援する（いいね）</Button>
              <hr />
              <p className="text-base font-semibold">💸 有料オーダー</p>
              <div className="text-sm">制服×寝そべりポーズ：受付中</div>
              <Button className="w-full mt-2">リクエストを送る</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <div className="grid grid-cols-3 gap-2">
            <div className="relative">
              <img src="/photos/preview1.jpg" alt="Preview 1" className="rounded-xl" />
              <div className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
                <Heart size={16} className="text-pink-500" />
              </div>
            </div>
            <div className="relative">
              <img src="/photos/preview2.jpg" alt="Preview 2" className="rounded-xl blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="text-gray-500" />
              </div>
            </div>
            <div className="relative">
              <img src="/photos/preview3.jpg" alt="Preview 3" className="rounded-xl" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="about">
          <p className="text-sm leading-relaxed">
            コスプレとカメラが趣味の社会人レイヤーです📷
            ナース服・制服・パーカー女子が得意ジャンル！
            「見られたい」性癖を全力で叶えます💖
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
