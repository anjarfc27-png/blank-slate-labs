import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Package,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Analytics = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState('today');

  // Mock data
  const stats = {
    revenue: 2450000,
    transactions: 124,
    products: 45,
    avgTransaction: 19758
  };

  const topProducts = [
    { name: 'Indomie Goreng', sold: 85, revenue: 850000 },
    { name: 'Aqua 600ml', sold: 72, revenue: 360000 },
    { name: 'Beng-Beng', sold: 64, revenue: 192000 },
    { name: 'Kopi ABC', sold: 58, revenue: 290000 },
    { name: 'Teh Pucuk', sold: 52, revenue: 260000 },
  ];

  const categories = [
    { name: 'Makanan', percentage: 45, amount: 1102500, color: 'from-orange-500 to-red-500' },
    { name: 'Minuman', percentage: 30, amount: 735000, color: 'from-blue-500 to-cyan-500' },
    { name: 'Snack', percentage: 25, amount: 612500, color: 'from-purple-500 to-pink-500' },
  ];

  const hourlyData = [
    { hour: '08:00', amount: 150000 },
    { hour: '09:00', amount: 200000 },
    { hour: '10:00', amount: 280000 },
    { hour: '11:00', amount: 320000 },
    { hour: '12:00', amount: 450000 },
    { hour: '13:00', amount: 380000 },
    { hour: '14:00', amount: 290000 },
    { hour: '15:00', amount: 380000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-10 shadow-sm status-bar-overlay status-bar-dark">
        <div className="py-6 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => navigate('/')}
                  className="rounded-full hover:bg-gray-100"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                  <p className="text-sm text-gray-600">Analisis Performa Toko</p>
                </div>
              </div>
              <Button 
                variant="outline"
                className="rounded-2xl"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6 pb-safe-bottom">
        {/* Period Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['today', 'week', 'month', 'year'].map((p) => (
            <Button
              key={p}
              variant={period === p ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPeriod(p)}
              className="rounded-2xl capitalize"
            >
              {p === 'today' ? 'Hari Ini' : p === 'week' ? 'Minggu Ini' : p === 'month' ? 'Bulan Ini' : 'Tahun Ini'}
            </Button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-white/80 mb-1">Total Pendapatan</p>
              <p className="text-2xl font-bold">Rp {stats.revenue.toLocaleString('id-ID')}</p>
              <div className="flex items-center gap-1 text-xs text-white/90 mt-2">
                <TrendingUp className="h-3 w-3" />
                <span>+12.5%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  <ShoppingCart className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-white/80 mb-1">Total Transaksi</p>
              <p className="text-2xl font-bold">{stats.transactions}</p>
              <div className="flex items-center gap-1 text-xs text-white/90 mt-2">
                <TrendingUp className="h-3 w-3" />
                <span>+8.3%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 via-violet-600 to-pink-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  <Package className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-white/80 mb-1">Produk Terjual</p>
              <p className="text-2xl font-bold">{stats.products}</p>
              <div className="flex items-center gap-1 text-xs text-white/90 mt-2">
                <Activity className="h-3 w-3" />
                <span>Real-time</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-3xl overflow-hidden">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
              <p className="text-sm text-white/80 mb-1">Rata-rata/Transaksi</p>
              <p className="text-2xl font-bold">Rp {stats.avgTransaction.toLocaleString('id-ID')}</p>
              <div className="flex items-center gap-1 text-xs text-white/90 mt-2">
                <TrendingUp className="h-3 w-3" />
                <span>+15.2%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12 bg-white rounded-2xl shadow-sm">
            <TabsTrigger value="revenue" className="rounded-2xl">
              <BarChart3 className="h-4 w-4 mr-2" />
              Pendapatan
            </TabsTrigger>
            <TabsTrigger value="products" className="rounded-2xl">
              <Package className="h-4 w-4 mr-2" />
              Produk
            </TabsTrigger>
            <TabsTrigger value="categories" className="rounded-2xl">
              <PieChart className="h-4 w-4 mr-2" />
              Kategori
            </TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="mt-6">
            <Card className="border-0 shadow-md rounded-3xl bg-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Grafik Pendapatan Per Jam</span>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hourlyData.map((data, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700">{data.hour}</span>
                        <span className="font-bold text-gray-900">Rp {data.amount.toLocaleString('id-ID')}</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${(data.amount / 450000) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Card className="border-0 shadow-md rounded-3xl bg-white">
              <CardHeader>
                <CardTitle>Produk Terlaris</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProducts.map((product, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold w-10 h-10 rounded-xl flex items-center justify-center text-sm shadow-md">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{product.name}</p>
                          <p className="text-xs text-gray-500">Terjual {product.sold} unit</p>
                        </div>
                      </div>
                      <p className="font-bold text-blue-600">
                        Rp {product.revenue.toLocaleString('id-ID')}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="mt-6">
            <Card className="border-0 shadow-md rounded-3xl bg-white">
              <CardHeader>
                <CardTitle>Performa Kategori</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${cat.color}`}></div>
                          <span className="font-semibold text-gray-800">{cat.name}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">Rp {cat.amount.toLocaleString('id-ID')}</p>
                          <p className="text-xs text-gray-500">{cat.percentage}%</p>
                        </div>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-500`}
                          style={{ width: `${cat.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Insights */}
        <Card className="border-0 shadow-md rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              Insight Cepat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-sm font-semibold text-gray-800 mb-1">⭐ Jam Tersibuk</p>
              <p className="text-xs text-gray-600">Pukul 12:00 - 13:00 dengan pendapatan tertinggi Rp 450.000</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-sm font-semibold text-gray-800 mb-1">📈 Tren Positif</p>
              <p className="text-xs text-gray-600">Penjualan meningkat 12.5% dibanding periode sebelumnya</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-sm font-semibold text-gray-800 mb-1">🎯 Rekomendasi</p>
              <p className="text-xs text-gray-600">Stok Indomie Goreng perlu ditambah karena penjualan tinggi</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
