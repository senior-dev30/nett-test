import { SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="#4E5D79"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export default Close;
