import { component$, Slot } from '@builder.io/qwik';
import { Layout } from '~/layout/layout';

export default component$(() => {
  return (
    <Layout gap="large">
      <Slot />
    </Layout>
  );
});
