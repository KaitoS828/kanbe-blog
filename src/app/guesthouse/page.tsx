import { JsonLd } from '@/components/JsonLd'
import { localBusinessJsonLd } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ゲストハウス日静 | プライベートサウナ付き一棟貸し・北海道広尾町',
  description: '北海道広尾町音調津にある一棟貸しゲストハウス。KOBU SAUNAプライベートサウナ付き。昆布浜と日高山脈を望む静かな漁師町で、施設全体をお客様専用にご利用いただけます。',
  alternates: { canonical: '/guesthouse' },
}

export default function GuesthousePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      <h1 className="text-3xl font-bold mb-2">ゲストハウス日静</h1>
      <p className="text-gray-400 text-sm mb-6">Guest House NISSEI — 北海道広尾町音調津</p>

      <p className="text-gray-600 leading-relaxed mb-10">
        太平洋と日高山脈を望む、静かな漁師町にある一棟貸しゲストハウスです。
        滞在中は施設全体をお客様専用の空間としてお使いいただけます。
        プライベートサウナ「KOBU SAUNA」が宿泊料金に含まれています。
      </p>

      {/* KOBU SAUNA */}
      <section className="mb-10 border border-gray-100 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-1">KOBU SAUNA</h2>
        <p className="text-xs text-gray-400 mb-4">Produced by Sauna & Soda UNCLE ZAKU</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          窓の外に広がるのは、漆黒のような昆布浜と日高山脈の稜線。
          広尾町産の白樺・トドマツ・ナラを使って作られた、この場所にしかないサウナです。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            ['収容人数', '4名'],
            ['室温', '約85℃'],
            ['水風呂', 'あり'],
            ['外気浴', '屋根あり・なし 各1箇所'],
            ['利用時間', '〜21:00 / 朝はチェックアウト1時間前まで'],
            ['料金', '宿泊料金に含む（無料）'],
          ].map(([label, value]) => (
            <div key={label} className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">{label}</div>
              <div className="font-medium text-gray-800 text-xs">{value}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          推奨サイクル: サウナ（8〜15分）→ 水風呂（1〜3分）→ 外気浴（5〜15分）を3〜4セット
        </p>
      </section>

      {/* 施設情報 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">施設情報</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">チェックイン / アウト</h3>
            <p className="text-sm text-gray-600">
              チェックイン: 15:00〜21:00<br />
              チェックアウト: 翌10:00まで<br />
              <span className="text-xs text-gray-400">早期・レイトは要相談（空き状況による）</span>
            </p>
          </div>
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">アクセス</h3>
            <p className="text-sm text-gray-600">
              北海道広尾郡広尾町音調津<br />
              帯広駅から車で約90分<br />
              とかち帯広空港から約80分
            </p>
          </div>
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">設備</h3>
            <p className="text-sm text-gray-600">
              キッチン（調理・持ち込み可）<br />
              シャワー・バスルーム<br />
              Wi-Fi・駐車場（3台）
            </p>
          </div>
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">支払い方法</h3>
            <p className="text-sm text-gray-600">現金・クレジットカード・電子マネー</p>
          </div>
        </div>
      </section>

      {/* キャンセルポリシー */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">キャンセルポリシー</h2>
        <div className="border border-gray-100 rounded-lg overflow-hidden text-sm">
          {[
            ['7日前以上', '無料'],
            ['3〜6日前', '宿泊料金の30%'],
            ['前々日', '宿泊料金の50%'],
            ['前日', '宿泊料金の80%'],
            ['当日・連絡なし', '宿泊料金の100%'],
          ].map(([timing, fee], i) => (
            <div key={timing} className={`flex justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <span className="text-gray-600">{timing}</span>
              <span className="font-medium text-gray-800">{fee}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 周辺観光 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">周辺のおすすめ</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>🌊 <strong>黄金道路</strong> — 太平洋沿いの絶景ドライブルート（国道336号）</p>
          <p>💧 <strong>フンベの滝</strong> — 海岸の断崖から流れ落ちる名瀑</p>
          <p>⛩ <strong>広尾神社</strong> — 静かな境内でひと息</p>
        </div>
      </section>

      {/* ハウスルール */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">ハウスルール</h2>
        <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
          <li>全館禁煙（喫煙は指定の屋外スペースのみ）</li>
          <li>静粛時間: 22:00〜8:00（漁師町のため近隣へのご配慮をお願いします）</li>
          <li>ペット不可</li>
          <li>宿泊契約者以外の方の宿泊はお断りしています</li>
        </ul>
      </section>

      {/* CTA */}
      <a
        href="mailto:kaito.sekimoto8@gmail.com"
        className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg text-sm hover:bg-gray-700 transition-colors"
      >
        予約・お問い合わせ
      </a>
    </>
  )
}
