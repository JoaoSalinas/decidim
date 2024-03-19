import { Carousel } from 'flowbite';

$(() => {
  const carouselElement = document.getElementById('decidim-slider');
  const items = document.querySelectorAll('.decidim-slider-item');

  const options = {
    defaultPosition: 1,
    interval: 3000,              
    indicators: {
      activeClasses: 'bg-white dark:bg-gray-800',
      inactiveClasses:
        'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
      items: [                    
        {
          position: 0,
          el: document.getElementById('carousel-indicator-1'),
        },
        {
          position: 1,
          el: document.getElementById('carousel-indicator-2'),
        },
        {
          position: 2,
          el: document.getElementById('carousel-indicator-3'),
        },
        {
          position: 3,
          el: document.getElementById('carousel-indicator-4'),
        },
      ],
    },
    onNext: () => {
      console.log('next slider item is shown');
    },
    onPrev: () => {
      console.log('previous slider item is shown');
    },
    onChange: () => {
      console.log('new slider item has been shown');
    },
  };
          
  const instanceOptions = {
    id: 'decidim-slider',
    override: true
  };

  const carousel = new Carousel(carouselElement, items, options, instanceOptions);

  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');

  next.addEventListener('click', carousel.next());
  prev.addEventListener('click', carousel.prev());
});
