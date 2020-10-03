<script>
  import { todo } from "./store.js";
</script>

<form>
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input
      type="text"
      class="form-control"
      id="title"
      bind:value={$todo.title} />
  </div>
  <div class="mb-3">
    <label for="userId" class="form-label">User id</label>
    <input
      type="text"
      class="form-control"
      id="userId"
      bind:value={$todo.userId} />
  </div>
  <div class="mb-3 form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="completed"
      bind:checked={$todo.completed} />
    <label class="form-check-label" for="completed">Completed</label>
  </div>
</form>
