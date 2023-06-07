import { component$ } from '@builder.io/qwik';
import { Image } from '~/ui/image';

export default component$(() => {
  return (
    <section role="presentation" class="relative">
      <Image
        src="/background/bg-cont.jpg"
        width="634"
        height="265"
        alt="Servokom ozadje"
        fetchPriority="high"
        layout="responsive"
      />
      <div
        class="`
        absolute inset-0
        px-6
        py-6
        flex flex-col flex-nowrap
        gap-3
        text-darkblue font-semibold
        `"
      >
        <h1 class="text-3xl sm:text-5xl">Hitro in čisto</h1>
        <p class="text-xl sm:text-3xl">Očistimo in zaščitimo.</p>
      </div>
    </section>
  );
});
