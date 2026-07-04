export default function SubprocessorTable({ data }: { data: { service: string; purpose: string }[] }) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Trusted Subprocessors
      </h2>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">
              Service
            </th>

            <th className="p-4 text-left">
              Purpose
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-t"
            >
              <td className="p-4">
                {item.service}
              </td>

              <td className="p-4">
                {item.purpose}
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}