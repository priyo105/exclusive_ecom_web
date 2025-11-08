import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion"
import type { ProductInfo } from '../../../../types/ProductInfo'
import parse from 'html-react-parser';

export default function ProductInfo({ productInfo }: { productInfo?: ProductInfo | null }) {
  // if productInfo isn't loaded yet, render nothing (or replace with a loader if desired)
  if (!productInfo) return null;

  console.log("ProductInfo:", productInfo);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className='font-semibold'>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {parse(productInfo.productInformation || '')}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Specification</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {
            productInfo.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="text-gray-600">{spec.key}</span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Brand Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {parse(productInfo.brandInformation || '')}
        </AccordionContent>
      </AccordionItem>

            <AccordionItem value="item-4">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          {parse(productInfo.returnPolicy || '')}
        </AccordionContent>
      </AccordionItem>
    </Accordion>)
}
