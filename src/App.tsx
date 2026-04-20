import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import BusquedaPersonal from './pages/BusquedaPersonal';
import TercerizacionPersonal from './pages/TercerizacionPersonal';
import PayrollContable from './pages/PayrollContable';
import AutomatizacionesN8n from './pages/AutomatizacionesN8n';
import SoftwareMedida from './pages/SoftwareMedida';
import DesarrolloWeb from './pages/DesarrolloWeb';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contacto from './pages/Contacto';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

const isAuthenticated = () => {
  return !!localStorage.getItem('google_token');
};

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />

          {/* Service Pages */}
          <Route path="/busqueda-de-personal" element={<BusquedaPersonal />} />
          <Route path="/tercerizacion-personal-mendoza" element={<TercerizacionPersonal />} />
          <Route path="/payroll-contable-mendoza" element={<PayrollContable />} />
          <Route path="/automatizaciones-n8n" element={<AutomatizacionesN8n />} />
          <Route path="/software-a-medida" element={<SoftwareMedida />} />
          <Route path="/desarrollo-web-profesional" element={<DesarrolloWeb />} />

          {/* Blog & Contact */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 – Redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
