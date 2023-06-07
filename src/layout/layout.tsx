import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/layout/footer';
import { Header } from '~/layout/header';
import { HeaderMenu } from '~/layout/header-menu';
import { Image } from '~/ui/image';
import { ServicesCard } from '~/layout/ServicesCard';

type Props = {
  gap: 'small' | 'large';
};

export const Layout = component$<Props>((props) => {
  return (
    <div
      class="bg-local w-full"
      style="background: url('/background/bg-top.jpg') repeat-x scroll center top;"
    >
      <Header />
      <div class="max-w-4xl mx-auto bg-white rounded-3xl pl-1.5">
        <HeaderMenu />

        <div
          class={[
            `flex-1 flex flex-col md:flex-row`,
            {
              'gap-1.5': props.gap === 'small',
              'gap-5': props.gap === 'large',
            },
          ]}
        >
          <aside class="mt-1.5 space-y-1.5 mb-10">
            <ServicesCard />

            <Image
              src="/logos/task-diversey.jpg"
              width="264"
              height="264"
              alt="Taski diversey"
              fetchPriority="high"
            />

            <Image
              src="/logos/kiehel.jpg"
              width="298"
              height="126"
              alt="kiehel"
              fetchPriority="high"
              layout="unstyled"
            />
          </aside>
          <main
            class={[
              'maincontent',
              `flex-1 order-first md:order-2`,
              {
                'my-1.5 mb-5 pr-1.5': props.gap === 'small',
                'my-5 pr-5': props.gap === 'large',
              },
            ]}
          >
            <Slot />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
});
