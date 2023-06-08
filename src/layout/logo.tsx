import { component$ } from '@builder.io/qwik';
import { Image } from '~/ui/image';

export const Logo = component$(() => {
  return (
    <picture>
      <source type="image/webp" srcSet="/logos/servokom.png.webp" />
      <Image
        src="/logos/servokom.png"
        width="277"
        height="92"
        alt="Servokom"
        fetchPriority="high"
        layout="unstyled"
      />
    </picture>
  );
});
