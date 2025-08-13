import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export type FAQItem = {
  question: string
  answer: React.ReactNode
}

export default function OwnerStyleFAQ({ title = 'FAQs', items }: { title?: string; items: FAQItem[] }) {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 text-center">{title}</h2>
        <div className="mt-8 rounded-[20px] md:rounded-[24px] border border-gray-200 bg-white shadow-sm">
          <Accordion type="single" collapsible className="divide-y divide-gray-200">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger className="px-5 md:px-6 py-4 md:py-5 text-left text-[15px] md:text-base font-medium text-gray-900 hover:no-underline">
                  <span className="flex-1">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-6 pb-5 text-gray-700">
                  <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


