import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even'
    return 'odd'
  })
  function increaseCount() {
    count.value++
  }
  function decreaseCount() {
    count.value--
  }

  return { count,
     oddOrEven,
      increaseCount,
      decreaseCount 
    };
});
