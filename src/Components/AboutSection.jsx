import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    id: 1,
    question: "What types of toys are available on ToyTopiya?",
    answer:
      "We offer a wide variety of toys, including educational toys, STEM kits, baby toys, gear toys, puzzles, remote control toys, and outdoor play products.",
  },
  {
    id: 2,
    question: "Do you deliver toys all over Bangladesh?",
    answer:
      "Yes, we provide fast and reliable home delivery services across all of Bangladesh.",
  },
  {
    id: 3,
    question: "How can I pay for my order?",
    answer:
      "You can pay via Cash on Delivery, bKash, Nagad, and card payments.",
  },
  {
    id: 4,
    question: "Are the toys safe for children?",
    answer:
      "Yes, all our toys are child-safe, high-quality, and carefully selected for kids.",
  },
  {
    id: 5,
    question: "How long does delivery take?",
    answer:
      "Orders are usually delivered within 2–5 business days depending on location.",
  },
];

const AboutSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-14 px-4 grid md:grid-cols-2 gap-10">
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          ToyTopiya – Best Educational & Fun Toys Online in Bangladesh
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          At ToyTopiya, we believe that playtime is essential for a child’s
          learning and creativity. As one of the most trusted online toy stores,
          we offer a wide selection of educational toys, STEM kits, puzzles,
          baby toys, and fun gear toys designed to inspire young minds.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          We provide nationwide delivery with easy payment options such as Cash
          on Delivery, bKash, Nagad, and card payments. Our mission is to make
          learning fun and accessible to children everywhere.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Why Shop from ToyTopiya?
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Wide range of educational and learning toys</li>
          <li>• Safe and child-friendly products</li>
          <li>• Affordable prices and exciting discounts</li>
          <li>• Fast & reliable delivery across Bangladesh</li>
          <li>• Easy & secure payment options</li>
          <li>• Trusted by thousands of parents</li>
        </ul>
      </div>

      {/* RIGHT SIDE — FAQ ACCORDION */}
      <div className="space-y-3">
        {faqs.map((item) => (
          <div key={item.id} className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-100"
            >
              <span className="font-medium">
                {item.id}. {item.question}
              </span>
              {open === item.id ? <IoRemove size={22} /> : <IoAdd size={22} />}
            </button>

            {open === item.id && (
              <div className="p-3 text-gray-700 border-t bg-gray-50 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
