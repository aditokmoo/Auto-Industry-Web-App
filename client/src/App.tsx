import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AuthContextProvider } from './features/auth/context/auth.context';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './router/PrivateRoute/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss';

const LoginLayout = lazy(() => import('./features/auth/layout/LoginLayout/LoginLayout'));
const RegisterLayout = lazy(() => import('./features/auth/layout/RegisterLayout/RegisterLayout'));
const AppLayout = lazy(() => import('./layouts/AppLayout/AppLayout'));
const PublicRoute = lazy(() => import('./router/PublicRoute/PublicRoute'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout/AuthLayout'));
const VerifyLayout = lazy(() => import('./features/auth/layout/VerifyLayout/VerifyLayout'));
const NotFound = lazy(() => import('./features/NotFound/NotFound'));
const PersistLogin = lazy(() => import('./components/PersistLogin'));
const ServiceProviders = lazy(() => import('./features/serviceProviders/ServiceProviders'));
const Settings = lazy(() => import('./features/settings/Settings'));
const SavedProviders = lazy(() => import('./features/savedProviders/SavedProviders'));
const ServiceProviderDetails = lazy(() => import('./features/serviceProviderDetails/ServiceProviderDetails'));
const Chat = lazy(() => import('./features/chat/Chat'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <AuthContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<PersistLogin />}>
                <Route path="/" element={<Navigate to="/" />} />

                {/* Private routes */}
                <Route path="/messages" element={<PrivateRoute allowedRoles={["serviceProvider", "customer"]}><AppLayout /></PrivateRoute>}>
                  <Route index element={<Chat />} />
                </Route>

                {/* App Layout routes */}
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<ServiceProviders />} />
                  <Route path="/serviceProvider/:id" element={<ServiceProviderDetails />} />
                  <Route path="saved-providers" element={<SavedProviders />} />
                  <Route path="settings" element={<Settings />} />

                </Route>

                {/* Auth Layout routes */}
                <Route path="/auth" element={<PublicRoute><AuthLayout /></PublicRoute>}>
                  <Route index element={<Navigate to="login" />} />
                  <Route path="login" element={<LoginLayout />} />
                  <Route path="register" element={<RegisterLayout />} />
                  <Route path="verify" element={<VerifyLayout />} />
                </Route>

                {/* not found route */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
          <ToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;