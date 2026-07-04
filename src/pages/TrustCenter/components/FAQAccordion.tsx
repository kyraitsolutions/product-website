import { useState } from "react";

export default function FAQAccordion({ faq }: { faq: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>

      <h2 className="text-2xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      {faq.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg mb-4 overflow-hidden"
        >
          <button
            className="w-full text-left p-5 font-semibold flex justify-between"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            {item.question}

            <span>
              {open === index ? "-" : "+"}
            </span>
          </button>

          {open === index && (
            <div className="px-5 pb-5 text-gray-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}