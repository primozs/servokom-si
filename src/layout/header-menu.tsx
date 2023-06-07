import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';
import { Link, useLocation, useContent } from '@builder.io/qwik-city';
// import { HiChevronRightMini } from '@qwikest/icons/heroicons';

export const HeaderMenu = component$(() => {
  const { menu } = useContent();
  const { url } = useLocation();

  useStylesScoped$(`
    .h84 {
      height: 84px;   
    }
    .navbg {
      background: url(/background/menu-right.jpg) no-repeat scroll right top;      
      width: 238px;      
    }
  `);

  return (
    <nav
      class="`
      h84
      w-full 
      flex items-center 
      relative 
      px-1.5 
      rounded-t-3xl
      bg-gradient-to-t from-hblue to-white
    `"
      style="background: url(/background/bg-menu.jpg) repeat-x 0px 0px;"
    >
      {menu
        ? menu.items?.map((item) => (
            <ul class="flex space-x-1 sm:space-x-10 items-center">
              {item.items?.map((item) => (
                <>
                  <HLink href={item.href} currentPathname={url.pathname}>
                    {item.text}
                  </HLink>
                </>
              ))}
            </ul>
          ))
        : null}
      <div class="navbg h84 absolute top-0 right-0"></div>
    </nav>
  );
});

type HLinkProps = {
  href?: string;
  currentPathname?: string;
};

export const HLink = component$<HLinkProps>((props) => {
  const active =
    props.currentPathname ===
    (props.href?.slice(-1)[0] === '/' ? props.href : props.href + '/');

  return (
    <li class="p-2 sm:p-5 flex items-center space-x-2 group z-10">
      <span
        class={[
          `
            rounded-full h-5 w-5
            flex items-center justify-center
            group-hover:bg-lightgreen
          `,
          {
            'bg-hbluebutton': !active,
            'bg-lightgreen': !!active,
          },
        ]}
      >
        {/* not working in production build */}
        {/* <HiChevronRightMini class="text-white" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 text-white"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <Link href={props.href}>
        <Slot />
      </Link>
    </li>
  );
});
