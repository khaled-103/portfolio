"use client"
import { createContext, useContext } from "react";

const DictionaryContext = createContext<any>(null);

export function DictionaryProvider({ dictionary, children }: { dictionary: any; children: React.ReactNode }) {
  return <DictionaryContext.Provider value={dictionary}>{children}</DictionaryContext.Provider>;
}

export function useDictionary() {
  return useContext(DictionaryContext);
}