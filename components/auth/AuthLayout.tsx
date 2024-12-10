import { Mic } from 'lucide-react';
import Link from 'next/link';

export const AuthLayout = ({ children }:any) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center items-center">
          <Mic className="h-12 w-12 text-primary" />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Voice Diary
        </h2>
      </div> */}

      <div className="mt-8 sm:mx-auto sm:w-full justify-items-center sm:max-w-md">
          {children}
      </div>
    </div>
  );
};