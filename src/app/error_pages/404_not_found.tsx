import Link from 'next/link';
import Navbar from '../../components/navbar';
import SesaBG from '../../components/sesa_background';
import SesaIcon from '../../components/icons/sesalogoComb';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <SesaBG />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-8">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The service or page you're looking for is currently under development or doesn't exist.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Return Home
            </Link>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-4 px-6 relative">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-24 h-5">
              <SesaIcon className="text-white w-full h-full" />
            </div>
            <p className="text-sm text-center md:text-right">
              © tjk sesa exclusive information service, 2024.06/ 2.8
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
