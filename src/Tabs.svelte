<script>
  export let tabs;
  export let activeTab;
  export let onTabChange;

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  $: activeIndex = tabs.indexOf(activeTab);
</script>

<nav class="tabs" style="--tab-count: {tabs.length}; --active-index: {activeIndex}">
  <div class="indicator"></div>
  {#each tabs as tab}
    <button
      class:active={activeTab === tab}
      on:click={() => onTabChange(tab)}
    >
      {capitalize(tab)}
    </button>
  {/each}
</nav>

<style>
  .tabs {
    display: flex;
    position: relative;
    padding: var(--space-sm);
    background: var(--accent-muted);
    border-radius: var(--radius-full);
    margin: var(--space-sm) var(--space-md);
  }

  .indicator {
    position: absolute;
    top: var(--space-xs);
    bottom: var(--space-xs);
    left: var(--space-xs);
    right: var(--space-xs);
    background: var(--accent-primary);
    border-radius: var(--radius-full);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
    width: calc((100% - var(--space-xs) * 2) / var(--tab-count));
    transform: translateX(calc(var(--active-index) * 100%));
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  button {
    flex: 1;
    padding: var(--space-sm) var(--space-md);
    border: none;
    background: transparent;
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    color: var(--text-secondary);
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: color var(--transition-normal);
  }

  @media (hover: hover) {
    button:not(.active):hover {
      color: var(--text-primary);
    }
  }

  button.active {
    color: white;
    font-weight: 600;
  }
</style>
