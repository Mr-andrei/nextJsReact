'use client'

import {cn} from '@/lib/utils';
import React from 'react';
import {useCategoryStore} from "@/store/category";


const cats = [
    {id: 1, category: 'Пиццы'},
    {id: 2, category: 'Комбо'},
    {id: 3, category: 'Закуски'},
    {id: 4, category: 'Коктейли'},
    {id: 5, category: 'Кофе'},
    {id: 6, category: 'Напитки'},
    {id: 7, category: 'Десерты'},
];

interface Props {
    className?: string;
}

export const Categories: React.FC<Props> = ({className}) => {

    const activeId = useCategoryStore(state => state.activeId)


    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map(({id, category}, i) => (
                <a
                    key={id}
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
                    )}
                    href={`/#${category}`}>
                    {category}
                </a>
            ))}
        </div>
    );
};
