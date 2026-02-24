'use client';

import { useState } from 'react';
import { track } from '@/lib/tracking';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        const isOpening = openIndex !== index;
        setOpenIndex(isOpening ? index : null);
        if (isOpening) {
            track({ event: 'faq_open', label: items[index].question });
        }
    };

    return (
        <dl className="accordion" role="list">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const id = `faq-answer-${index}`;
                return (
                    <div key={index} className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`} role="listitem">
                        <dt>
                            <button
                                className="accordion__trigger"
                                onClick={() => toggle(index)}
                                aria-expanded={isOpen}
                                aria-controls={id}
                                id={`faq-trigger-${index}`}
                            >
                                <span>{item.question}</span>
                                <span className="accordion__icon" aria-hidden="true">
                                    {isOpen ? '−' : '+'}
                                </span>
                            </button>
                        </dt>
                        <dd
                            id={id}
                            className="accordion__panel"
                            role="region"
                            aria-labelledby={`faq-trigger-${index}`}
                            hidden={!isOpen}
                        >
                            <p>{item.answer}</p>
                        </dd>
                    </div>
                );
            })}
        </dl>
    );
}
