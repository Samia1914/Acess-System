/* eslint-disable react/display-name */
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from 'next/image';

export default function PublicPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Conheça nossas aplicações
    
      <Accordion.Root
        className="w-full h-auto opacity-80 p-2 place-content-center place-items-center font-bold rounded shadow-background"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <Accordion.AccordionTrigger>
          <Image
          className="dark:invert"
          src="/danca.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
          </Accordion.AccordionTrigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <Accordion.AccordionTrigger>
            Is it unstyled?
          </Accordion.AccordionTrigger>
          <Accordion.Content>
            Yes. Its unstyled by default, giving you freedom over the look and
            feel.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
          <Accordion.AccordionTrigger>
            AccordionTriggerCan it be animated?
            <ChevronDownIcon></ChevronDownIcon>
          </Accordion.AccordionTrigger>
          <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">
              Yes! You can animate the Accordion with CSS or JavaScript.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
