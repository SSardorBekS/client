import React from 'react';
import { SignUpPage } from '@/components/auth/RegisterForm';
import { AuthLayout } from '@/components/auth/AuthLayout';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <SignUpPage />
    </AuthLayout>
  );
}