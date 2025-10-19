import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Store, Users, LogOut, Smartphone, TrendingUp, Activity } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { signOut, isAdmin, loading, isAdminCheckComplete, user } = useAuth();
  const { currentStore } = useStore();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Show loading while checking admin status
  if (loading || !isAdminCheckComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Larger Header */}
      <div className="bg-white border-b border-gray-200 status-bar-overlay status-bar-dark">
        <div className="py-6 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-end mb-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleLogout}
                className="rounded-full hover:bg-gray-100"
              >
                <LogOut className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">{currentStore?.name || 'Toko Anjar'}</h1>
              <p className="text-gray-500">Selamat datang kembali, {user?.email?.split('@')[0] || 'User'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-4 pb-safe-bottom">
        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Analytics Dashboard */}
          <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white">
            <CardContent className="p-5 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Analytics</p>
                <p className="text-lg font-bold text-gray-900">Dashboard</p>
              </div>
            </CardContent>
          </Card>

          {/* Status Online */}
          <Card className="border border-gray-200 shadow-sm rounded-2xl bg-white">
            <CardContent className="p-5 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Status</p>
                <p className="text-lg font-bold text-green-600">Online</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Menu Cards */}
        <div className="space-y-3">
          {/* POS Menu */}
          <Card 
            className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-[0.98] rounded-3xl bg-blue-500 text-white overflow-hidden"
            onClick={() => navigate('/pos')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Store className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Kasir POS</h3>
                  <p className="text-sm text-white/90">
                    Transaksi & Manajemen Produk
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PPOB Menu */}
          <Card 
            className="border-0 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-[0.98] rounded-3xl bg-green-500 text-white overflow-hidden"
            onClick={() => navigate('/ppob')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">PPOB</h3>
                  <p className="text-sm text-white/90">
                    Pembayaran & Pulsa Digital
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Admin Menu - Only show if user is admin */}
          {isAdmin && (
            <Card 
              className="border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-[0.98] rounded-3xl bg-white overflow-hidden"
              onClick={() => navigate('/admin')}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-blue-50">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Admin Panel</h3>
                    <p className="text-sm text-gray-600">
                      Kelola User & Sistem
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
