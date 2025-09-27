/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Pagination } from "../constants";

export default function useLoadMore<T>(items: Array<T>) {
    const [itemsList, setItemsList] = useState(() => items.slice(0, Pagination.itemsPerPage));
    const [index, setIndex] = useState(1);
    const loadMore = () => {
        const start = index * Pagination.itemsPerPage;
        const end = start + Pagination.itemsPerPage;
        setItemsList([...itemsList,...items.slice(start, end)]);
        setIndex(index + 1);
    };
    return [itemsList,loadMore] as const;
}