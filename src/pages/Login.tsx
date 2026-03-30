import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // Guarda el token y redirige al dashboard
      localStorage.setItem('google_token', tokenResponse.access_token);
      navigate('/admin/dashboard');
    },
    onError: () => {
      setError('No se pudo iniciar sesión con Google. Intentá de nuevo.');
      setLoading(false);
    },
    prompt: 'select_account', // Siempre muestra el selector de cuenta
    flow: 'implicit',
  });

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    login();
  };

  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-10 rounded-[2.5rem] w-full max-w-md border-white/5 shadow-2xl space-y-8"
      >
        <div className="text-center space-y-4">
          <img src={logo} alt="Humantechia Logo" className="h-16 w-auto mx-auto mb-6" />
          <p className="text-neutral-400 text-sm">Acceso exclusivo para colaboradores autorizados.</p>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-dark hover:bg-neutral-100 py-4 rounded-2xl font-bold transition-all transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
        >
          {loading ? (
            <svg className="animate-spin w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 17.07 0 20.42 0 24c0 3.58.92 6.94 2.56 9.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
          )}
          {loading ? 'Conectando...' : 'Ingresar con Google'}
        </button>

        {error && (
          <p className="text-center text-xs text-red-400 bg-red-500/10 rounded-xl px-4 py-2">
            {error}
          </p>
        )}

        <p className="text-center text-xs text-neutral-500">
          Usa tu acceso autorizado de Humantechia
        </p>
      </motion.div>
    </div>
  );
}
