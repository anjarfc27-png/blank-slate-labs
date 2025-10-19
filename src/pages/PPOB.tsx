import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft,
  Plus,
  Smartphone, 
  Wifi, 
  Zap, 
  Wallet,
  CreditCard,
  Phone,
  Lightbulb,
  ShoppingBag,
  Tv,
  DollarSign
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const PPOB = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('beranda');
  const [depositAmount] = useState(0);

  // Kategori Prabayar
  const prabayarCategories = [
    { id: 'pulsa', name: 'Pulsa Seluler', icon: Smartphone },
    { id: 'paket-data', name: 'Paket Data', icon: Wifi },
    { id: 'token-listrik', name: 'Token Listrik', icon: Zap },
    { id: 'e-wallet', name: 'E-Wallet', icon: Wallet },
    { id: 'voucher', name: 'Voucher', icon: CreditCard },
  ];

  // Kategori Pascabayar
  const pascabayarCategories = [
    { id: 'telkom', name: 'Telkom', icon: Phone },
    { id: 'pln', name: 'PLN', icon: Lightbulb },
    { id: 'pulsa-pasca', name: 'Pulsa Pasca', icon: Smartphone },
    { id: 'pgn', name: 'PGN', icon: DollarSign },
    { id: 'pdam', name: 'PDAM', icon: ShoppingBag },
    { id: 'tv-kabel', name: 'TV Kabel', icon: Tv },
  ];

  const handleDeposit = () => {
    toast.info('Fitur deposit akan segera aktif');
  };

  const handleCategoryClick = (categoryId: string) => {
    toast.info(`Kategori ${categoryId} akan segera aktif setelah integrasi Digiflaz`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      {/* Header iOS Style with Better Padding */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 fixed top-0 z-10 w-full shadow-md status-bar-overlay status-bar-dark">
        <div className="py-4 px-4 sm:px-6">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/')}
                className="rounded-full hover:bg-gray-100"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <img src="/icon-192.png" alt="KasirQ" className="h-9 w-9 rounded-xl shadow-sm" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PPOB</h1>
                <p className="text-xs text-gray-600">Pembayaran Online</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              onClick={() => toast.info('Fitur atur harga akan segera aktif')}
              className="text-primary hover:bg-gray-100 text-sm rounded-full px-4"
            >
              Atur Harga
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs iOS Style */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-[88px] z-10 shadow-md">
          <TabsList className="w-full h-14 bg-transparent rounded-none border-0 grid grid-cols-2 gap-2 p-2 max-w-6xl mx-auto">
            <TabsTrigger 
              value="beranda" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-2xl font-semibold transition-all"
            >
              Beranda
            </TabsTrigger>
            <TabsTrigger 
              value="riwayat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-2xl font-semibold transition-all"
            >
              Riwayat
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6 pb-32 pt-40">
          <TabsContent value="beranda" className="space-y-6 mt-0">
            {/* Deposit Card iOS Style */}
            <Card className="border-0 shadow-xl rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden transform hover:scale-[1.02] transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-white/80">Saldo Deposit</p>
                    <p className="text-3xl font-bold">
                      Rp {depositAmount.toLocaleString('id-ID')}
                    </p>
                    <Button 
                      onClick={handleDeposit}
                      variant="secondary" 
                      size="sm" 
                      className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm rounded-xl"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Isi Saldo
                    </Button>
                  </div>
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Banner Promo iOS Style */}
            <Card className="border-0 shadow-md overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full mb-2">
                      PROMO SPESIAL
                    </div>
                    <h3 className="font-bold text-white text-xl leading-tight">Tri EXTRA BENEFIT</h3>
                    <p className="text-sm text-white/90 leading-snug">Dapatkan Bonus Pulsa Nelpon Hingga</p>
                    <p className="text-lg font-bold text-yellow-300">Rp 10.000 + Kuota Youtube Unlimited</p>
                    <p className="text-xs text-white/70 mt-2">*S&K berlaku</p>
                  </div>
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center ml-4 shadow-lg">
                    <Smartphone className="h-12 w-12 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prabayar Section iOS Style */}
            <div className="space-y-4">
              <h2 className="font-bold text-xl text-gray-900 px-1">Prabayar</h2>
              <div className="grid grid-cols-4 gap-4">
                {prabayarCategories.map((category, idx) => {
                  const Icon = category.icon;
                  const gradients = [
                    'from-blue-500 via-blue-600 to-cyan-500',
                    'from-purple-500 via-violet-600 to-pink-500',
                    'from-yellow-500 via-orange-500 to-red-500',
                    'from-green-500 via-emerald-600 to-teal-500',
                    'from-red-500 via-pink-500 to-rose-600'
                  ];
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-white shadow-md hover:shadow-lg transition-all active:scale-95 border border-gray-100/50"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center shadow-md`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-xs text-center font-semibold text-gray-800 leading-tight">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pascabayar Section iOS Style */}
            <div className="space-y-4">
              <h2 className="font-bold text-xl text-gray-900 px-1">Pascabayar</h2>
              <div className="grid grid-cols-4 gap-4">
                {pascabayarCategories.map((category, idx) => {
                  const Icon = category.icon;
                  const gradients = [
                    'from-indigo-500 via-purple-600 to-pink-600',
                    'from-yellow-400 via-amber-500 to-orange-600',
                    'from-teal-500 via-cyan-600 to-blue-600',
                    'from-rose-500 via-pink-600 to-purple-600',
                    'from-emerald-500 via-green-600 to-teal-600',
                    'from-orange-500 via-red-500 to-pink-600'
                  ];
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="flex flex-col items-center gap-3 p-4 rounded-3xl bg-white shadow-md hover:shadow-lg transition-all active:scale-95 border border-gray-100/50"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center shadow-md`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-xs text-center font-semibold text-gray-800 leading-tight">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Coming Soon Notice iOS Style */}
            <Card className="border-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl shadow-md">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                  <CreditCard className="h-10 w-10 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-semibold mb-2">
                  Fitur PPOB Segera Hadir
                </p>
                <p className="text-xs text-gray-600">
                  Transaksi online akan tersedia setelah integrasi dengan Digiflaz
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="riwayat" className="space-y-4 mt-0">
            <Card className="border-0 shadow-md rounded-3xl bg-white">
              <CardContent className="pt-20 pb-20 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <CreditCard className="h-12 w-12 text-gray-400" />
                </div>
                <p className="text-gray-700 font-semibold text-lg mb-2">Belum ada riwayat transaksi</p>
                <p className="text-sm text-gray-500">Transaksi PPOB Anda akan muncul di sini</p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>

      {/* Bottom Button iOS Style */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-2xl border-t border-gray-200/50 shadow-2xl">
        <div className="safe-bottom">
          <div className="max-w-6xl mx-auto">
            <Button 
              className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl text-white font-bold text-base rounded-3xl transition-all active:scale-95"
              onClick={() => toast.info('Fitur akan segera aktif')}
            >
              <span className="mr-3 text-lg">0 Item</span>
              LANJUTKAN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
