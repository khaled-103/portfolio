/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Pagination } from "../constants";

export default function useLoadMore<T>(items: Array<T>,perPage=Pagination.itemsPerPage) {
    const [itemsList, setItemsList] = useState(() => items.slice(0, perPage));
    const [index, setIndex] = useState(1);
    const loadMore = () => {
        const start = index * perPage;
        const end = start + perPage;
        setItemsList([...itemsList,...items.slice(start, end)]);
        setIndex(index + 1);
    };
    return [itemsList,loadMore] as const;
}