import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/layout/hero';
import Welcome from '~/content/welcome.mdx';
import Excellent from '~/content/excellent.mdx';

export default component$(() => {
  return (
    <>
      <Hero />

      <section class="px-5 pt-5">
        <Welcome />
      </section>

      <section class="px-5 pt-5">
        <Excellent />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Čistilni servis Servokom',
  meta: [
    {
      name: 'description',
      content: 'Čisti',
    },
  ],
};
