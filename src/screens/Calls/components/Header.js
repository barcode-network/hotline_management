import React from 'react';
import { format } from 'date-fns';

export const Header = () => {
  return (
    <header className="bg-white py-4 border">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <article className="flex">
          <div>
            {/* <p className="text-gray-600 text-sm">Today</p>
            <p className="text-sm">{format(new Date(), 'dd MMMM, yyyy')}</p> */}
          </div>
        </article>

        <article>
          <p className="font-bold">Amy Wen</p>
        </article>
      </div>
    </header>
  );
};
