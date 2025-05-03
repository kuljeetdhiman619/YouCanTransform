import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is You Can Transform and how can it help me?",
    answer: "You Can Transform is a lead management platform designed specifically for coaches. It helps you streamline your business, manage clients effectively, automate tasks, and ultimately grow your practice.",
    value: "item-1",
  },
  {
    question: "How does the platform help me track client progress?",
    answer:
      "You can easily monitor your clients' achievements, track their progress, and provide feedback, all within the platform.",
    value: "item-2",
  },
  {
    question:
      "Can i use You Can Transform to schedule sessions with my clients?",
    answer:
      "Yes, our platform includes a scheduling feature that allows clients to book sessions directly with you, reducing administrative work.",
    value: "item-3",
  },
  {
    question: "How is you can transform different from other lead management systems?",
    answer: "You Can Transform is tailored specifically to the needs of coaches, with features like client progress tracking, session scheduling, and portfolio management.",
    value: "item-4",
  },
  {
    question:
      "How Secure is my data on You Can Transform?",
    answer:
      " We take data security very seriously. We employ industry-standard encryption and security measures to protect your information and your clients' data.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
