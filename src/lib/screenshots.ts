import algolensWorkspace from '@/assets/images/algolens-collage/image copy 2.png';
import algolensComplexityReport from '@/assets/images/algolens-collage/image.png';
import algolensAlgorithmIdentified from '@/assets/images/algolens-collage/image copy.png';
import voyagerLanding from '@/assets/images/voyager/voyager-landing.jpeg';
import voyagerLogin from '@/assets/images/voyager/voyager-login.jpeg';
import voyagerAddBus from '@/assets/images/voyager/voyager-add-bus.jpeg';
import voyagerPickupDrop from '@/assets/images/voyager/voyager-pickup-drop.jpeg';
import voyagerMyBuses from '@/assets/images/voyager/voyager-my-buses.jpeg';

export type Shot = { src: string; alt: string; caption?: string };
export type ScreenGroup = { title: string; numbered?: boolean; shots: Shot[] };

export const algolensShots: Shot[] = [
  {
    src: algolensWorkspace,
    alt: 'AlgoLens workspace with a Python binary search function on the left and a step-by-step visualization of the search on the right',
  },
  {
    src: algolensComplexityReport,
    alt: 'AlgoLens Complexity Report tab showing O(log n) time and O(1) space estimates with high confidence, the reasoning behind them, and extracted structural features',
  },
  {
    src: algolensAlgorithmIdentified,
    alt: 'AlgoLens Algorithm Identified tab showing Binary Search detected with high confidence and the features that drove the classification',
  },
];

const landing: Shot = {
  src: voyagerLanding,
  alt: 'Voyager landing page with a red banner reading Book Your Bus Journey, a Search Buses button, and three feature cards: Wide Selection, Secure Booking and Real-time Updates',
  caption: 'Landing page with the Search Buses entry point.',
};
const login: Shot = {
  src: voyagerLogin,
  alt: 'Voyager login form with Login and Register tabs, email and password fields, and a red Login button',
  caption: 'Login and register screen with email and password fields.',
};
const myBuses: Shot = {
  src: voyagerMyBuses,
  alt: 'Bus owner My Buses page with Conductors and Add New Bus buttons and an empty state saying no buses have been added yet',
  caption: 'Bus owner fleet page, shown before any buses are added.',
};
const addBus: Shot = {
  src: voyagerAddBus,
  alt: 'Add New Bus form on the Bus Details step, with bus name and number, bus type, AC and upper berth switches, route and schedule fields, and a cancellation policy choice',
  caption: 'Bus details form covering basic information, route and schedule, and cancellation policy.',
};
const pickupDrop: Shot = {
  src: voyagerPickupDrop,
  alt: 'Add New Bus Pickup and Drop step listing pickup points at Bengaluru (Majestic) and drop points at Mumbai (Thane and Mumbai Central station), each with a time',
  caption: 'Pickup and drop points, each with a location and time.',
};

export const voyagerCardShots: Shot[] = [myBuses, landing, addBus, pickupDrop];

export const voyagerScreenGroups: ScreenGroup[] = [
  { title: 'Authentication and roles', shots: [login] },
  { title: 'Passenger booking flow', shots: [landing] },
  { title: 'Bus owner workflow', numbered: true, shots: [myBuses, addBus, pickupDrop] },
];
