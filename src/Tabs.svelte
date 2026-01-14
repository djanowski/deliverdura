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
    gap: 4px;
    padding: 8px;
    background: #f5f5f5;
  }

  button {
    flex: 1;
    padding: 8px 16px;
    border: none;
    background: transparent;
    border-radius: 6px;
    font-size: 0.9em;
    color: #666;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  button.active {
    background: var(--header-color);
    color: white;
    font-weight: 500;
  }
</style>
