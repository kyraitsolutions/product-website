export default function StatusGrid({ services }: { services: { name: string; status: string }[] }) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-8">
        Service Status
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">
                {service.name}
              </h3>
            </div>

            <span className="bg-green-100 text-sm text-green-700 px-3 py-1 rounded-full">
              {service.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}