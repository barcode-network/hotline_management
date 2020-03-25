import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

export const PanelTab = ({ title, value, label, color, active, onChange }) => {
  const containerClasses = classNames({
    'pl-3 pr-4 py-3 mr-1 rounded border border-b-0 rounded-b-none text-gray-600': true,
    'bg-white': active,
    'bg-gray-100': !active,
  });

  const valueClasses = classNames({
    'p-1 rounded mr-3': true,
    'bg-blue-100 text-blue-600': color === 'blue',
    'bg-red-100 text-red-600': color === 'red',
  });

  return (
    <div className="relative mr-1">
      <button
        className={containerClasses}
        type="button"
        onClick={() => onChange(value)}
      >
        <span className={valueClasses}>{label}</span>
        {title}
      </button>

      {active && <Indicator />}
    </div>
  );
};

const Indicator = styled.div.attrs({
  className: 'absolute bg-blue-600 rounded',
})`
  width: 5px;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
  left: -1px;
`;
