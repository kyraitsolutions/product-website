import FAQAccordion from "./FAQAccordion";
import StatusGrid from "./StatusGrid";
import SubprocessorTable from "./SubprocessorTable";

interface TrustcenterProps {
  section: {
    id: string;
    hero?: {
      title: string;
      subtitle: string;
    };
    description?: string;
    items?: {
      title: string;
      content: string;
    }[];
    faq?: {
      question: string;
      answer: string;
    }[];
    table?: {
      service: string;
      purpose: string;
    }[];
    services?: {
      name: string;
      status: string;
    }[];
    content?: Record<string, string>;
  };
}
export default function Trustcenter({ section }: TrustcenterProps) {
  return (
    <div className="max-w-[1480px] mx-auto px-8 py-14">

      {/* Hero */}
      <div className="mb-5">
        <h1 className="text-3xl font-bold mb-4">
          {section.hero?.title}
        </h1>

        <p className="text-gray-600 max-w-3xl">
          {section.hero?.subtitle}
        </p>
      </div>

      {/* Description */}
      {section.description && (
        <p className="text-gray-700 mb-10">
          {section.description}
        </p>
      )}

      {/* Cards */}
      {section.items && (
        <div className="grid md:grid-cols-2 gap-5">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 bg-white"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {section.faq && (
        <div className="">
          <FAQAccordion faq={section.faq} />
        </div>
      )}

      {/* Table */}
      {section.table && (
        <div className="">
          <SubprocessorTable data={section.table} />
        </div>
      )}

      {/* Status */}
      {section.services && (
        <div className="">
          <StatusGrid services={section.services} />
        </div>
      )}

      {/* Custom Content */}
      {section.content && (
        <div className="border rounded-xl p-8">
          {Object.entries(section.content).map(([key, value]) => (
            <div key={key} className="mb-4">
              <strong className="capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </strong>

              <p>{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}