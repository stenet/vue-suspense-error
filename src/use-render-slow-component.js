import { h, ref, unref } from 'vue';
import SlowComponent from './SlowComponent.vue';

export function useRenderSlowComponent() {
  const data = ref('A');

  setTimeout(() => {
    data.value = 'B';
  }, 700);

  const Comp = (props, context) => {
    return h(
      SlowComponent,
      {
        data: unref(data),
      },
      null
    );
  };

  return {
    Comp,
  };
}
