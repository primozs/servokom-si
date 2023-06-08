import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Services from '~/content/services.mdx';

export const ServicesCard = component$(() => {
  useStylesScoped$(`
  .img {
    height: 270px;
    background-image:    url(/background/sidebg.png.webp);
    background-size:     cover;                    
    background-repeat:   no-repeat;
    background-position: center center;  
  }
`);
  return (
    <div class="rounded-br-3xl bg-darkgreen overflow-hidden relative">
      <div class="img absolute w-full"></div>
      <div
        class="`
        relative w-full p-4 pb-10 
        
        [&>h2]:text-darkblue [&>h2]:text-2xl [&>h2]:mb-2
        text-white font-semibold        
      `"
      >
        <Services />
      </div>
    </div>
  );
});
