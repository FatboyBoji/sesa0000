export default function ServicesSideNav({ services }: { services: { title: string }[] }) {
  return (
    <div className="hidden lg:block fixed left-0 top-24 w-64 h-[calc(100vh-6rem)] overflow-y-auto border-r border-gray-100">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Services</h2>
        <ul className="space-y-1">
          {services.map((service, index) => (
            <li key={index}>
              <a
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2.5 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 