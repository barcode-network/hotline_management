import React, { useState } from 'react';

import { PanelTab } from './PanelTab';

export const Panel = ({ onNewCall }) => {
  const [active, setActive] = useState('all');

  return (
    <section className="container px-4 mx-auto ">
      <div className="relative">
        <header className="flex justify-between">
          <div className="flex">
            <PanelTab
              title="All"
              value="all"
              label="300"
              color="blue"
              active={active === 'all'}
              onChange={setActive}
            />

            <PanelTab
              title="Flagged"
              value="flagged"
              label="144"
              color="red"
              active={active === 'flagged'}
              onChange={setActive}
            />
          </div>

          <button
            type="button"
            onClick={() => onNewCall()}
            className="bg-blue-600 px-4 rounded my-1 text-white hover:bg-blue-500"
          >
            Add New Call
          </button>
        </header>

        <div className="bg-white border">
          <p>Hea</p>
        </div>
      </div>
    </section>
  );
};
