<script>
  export let tabs;
  export let activeTab;
  export let onTabChange;

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
</script>

<nav class="tabs">
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
    gap: var(--space-sm);
    padding: var(--space-md);
    background: var(--bg-header);
    border-bottom: 1px solid var(--border-color);
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
    transition: background var(--transition-fast), color var(--transition-fast);
  }

  button:hover {
    background: var(--accent-muted);
    color: var(--text-primary);
  }

  button.active {
    background: var(--accent-primary);
    color: white;
    font-weight: 600;
  }
</style>
