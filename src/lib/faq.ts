import { site } from "@/content";
import type { FaqItem } from "@/content/types";

export function faqItems(): FaqItem[] {
  return site.faq.filter((item) => item.question.trim() && item.answer.trim());
}

export function hasFaq(): boolean {
  return faqItems().length > 0;
}
