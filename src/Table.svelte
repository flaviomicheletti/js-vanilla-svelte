<script>
  export let todos;
  import { todo } from "./store.js";
</script>

<table class="table" id="mytable">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
    {#each todos as eachtodo}
      <tr on:click={() => todo.set(eachtodo)}>
        <th scope="row">{eachtodo.id}</th>
        <td>{eachtodo.title}</td>
      </tr>
    {/each}
  </tbody>
</table>
