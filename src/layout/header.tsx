import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Logo } from './logo';

export const Header = component$(() => {
  return (
    <header class="max-w-4xl mx-auto pl-3 pt-7 pb-3">
      <Link href="/" title="Servokom">
        <Logo />
      </Link>
    </header>
  );
});
