import Navbar from '../../components/navbar';
import SesaBG from '../../components/sesa_background';
import SesaIcon from '../../components/icons/sesalogoComb';


export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SesaBG />

      {/* Navbar Component */}
      <Navbar />

      {/* Main Body Section */}
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-black mb-12">
          Who are We?
        </h1>

        <div className="flex w-full h-full p-6">
          <SesaIcon className="text-black w-auto h-auto" />            
        </div>

        <div className="ml-5 md:ml-10">
          <p className="text-responsive text-black font-bold capitalize">
            We supply software systems for your business.
          </p>
        </div>
      </main>

      {/* Static Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6">
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
  );
}
