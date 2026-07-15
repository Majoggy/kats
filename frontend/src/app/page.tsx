import { redirect } from 'next/navigation';

const HARDCODED_USER_ID = 'ff535484-6880-4653-b06e-89983ecf4ed5';

export default function Home() {
  // straight to the good stuff
  redirect(`/welcome/${HARDCODED_USER_ID}`);
}
