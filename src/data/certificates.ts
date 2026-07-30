import softwareTechnologies from '../assets/certificates/01198133400321.png';
import advancedRobotics from '../assets/certificates/79043806143681.png';
import electronicsIot from '../assets/certificates/13456881419360.png';
import roboticsCoding from '../assets/certificates/58744354428702.png';
import designManufacturing from '../assets/certificates/86104404021822.png';

export interface Certificate {
  title: string;
  date: string;
  url: string;
}

/**
 * DENEYAP programme certificates. Vite turns each import into a URL, so the
 * images are only fetched when a visitor actually opens one.
 */
export const DENEYAP_CERTIFICATES: Certificate[] = [
  {
    title: 'Software Technologies',
    date: 'Apr 2 - Jul 17, 2022',
    url: softwareTechnologies,
  },
  { title: 'Advanced Robotics', date: 'Jan 3 - Apr 10, 2022', url: advancedRobotics },
  {
    title: 'Electronics Programming & Internet of Things',
    date: 'Dec 18, 2021 - Mar 27, 2022',
    url: electronicsIot,
  },
  { title: 'Robotics & Coding', date: 'Sep 4 - Nov 28, 2021', url: roboticsCoding },
  {
    title: 'Design & Manufacturing',
    date: 'May 1 - Jun 27, 2021',
    url: designManufacturing,
  },
];
