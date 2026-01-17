import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import PlatformLayout from './components/PlatformLayout';
import Home from './pages/Home'
import App from './components/App';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from './context/AuthContext';
import { action as loginAction, loader as loginLoader } from './pages/Login';
import { action as signupAction, loader as signupLoader } from './pages/Signup';
import { action as articlesAction, loader as articlesLoader } from './pages/Articles';
import Articles from './pages/Articles';
import Videos, { action as videosAction, loader as videosLoader } from './pages/Videos';
import Documents, { action as documentsAction, loader as documentsLoader } from './pages/Documents';
import Subscription from './pages/Subscription';
import { SummaryProvider } from './context/SummaryContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/platform" element={<PlatformLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="articles" element={<Articles />} loader={articlesLoader} action={articlesAction} />
        <Route path="videos" element={<Videos />} loader={videosLoader} action={videosAction} />
        <Route path="documents" element={<Documents />} loader={documentsLoader} action={documentsAction} />
        <Route path="subscription" element={<Subscription />} />
      </Route>
      <Route path="/login" element={<Login />} loader={loginLoader} action={loginAction} />
      <Route path="/signup" element={<Signup />} loader={signupLoader} action={signupAction} />
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <SummaryProvider>
        <App router={router} />
      </SummaryProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
);


