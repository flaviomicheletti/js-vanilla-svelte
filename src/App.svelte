<script>
  import Table from "./Table.svelte";
  import Form from "./Form.svelte";
  import service from "./TodoService.js";
  import { onMount } from "svelte";

  export let todos;

  onMount(async () => {
      todos = await service.getTodos();
  });
  
</script>

<main>
  <div id="main" class="container">
    <div class="row">
      <h1>JavaScript Vanilla</h1>
    </div>

    <div class="row">
      <div class="col" id="leftCol">
        <Table {todos} />
      </div>
      <div class="col" id="rigthCol">
        <Form />
      </div>
    </div>
  </div>
</main>
