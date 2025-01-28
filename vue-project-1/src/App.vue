<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { isTemplateExpression } from 'typescript'

type todoType = {
  title: String
  checked: boolean
}

type filterType = 'all' | 'completed'
const todoInput: Ref<String> = ref('')
const todos: Ref<todoType[]> = ref([])
const filter: Ref<filterType> = ref('all')

const filteredTodos = computed(() => {
  if (filter.value == 'completed') {
    return todos.value.filter((item) => item.checked)
  }
  return todos.value
})

function submitTodo(todoValue: String) {
  const todoAlreadyExists = todos.value.some((todoType) => todoType.title === todoValue)
  if (!todoAlreadyExists) {
    todos.value = [...todos.value, { title: todoValue, checked: false }]
    todoInput.value = ''
  }
}

function updateTodos(todo: todoType) {
  const todoToUpdate = todos.value.find((item) => item.title === todo.title)
  if (todoToUpdate) {
    todoToUpdate.checked = !todoToUpdate?.checked
  }
}
</script>

<template>
  <header>
    <div class="logo-container">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" />
    </div>
    <h1 class="heading">vue todo</h1>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <div>
      <TodoInput v-model:todoInput="todoInput" />
      <button @click="() => submitTodo(todoInput)">submit</button>
    </div>
    <TodoList :todos="filteredTodos" @update-todos="updateTodos" />
    <div>
      <button
        @click.prevent="
          () => {
            filter = 'all'
          }
        "
      >
        All
      </button>
      <button
        @click.prevent="
          () => {
            filter = 'completed'
          }
        "
      >
        Completed
      </button>
    </div>
  </main>
</template>

<style scoped>
header {
  background-color: #41b883;
  padding: 20px;
}

.logo-container {
  display: flex;
  height: 32px;
  width: 32px;
}

.logo {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

@media (min-width: 1024px) {
  header {
    background-color: #41b883;
    padding: 20px;
  }

  .logo-container {
    display: flex;
    height: 32px;
    width: 32px;
  }

  .logo {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  header .wrapper {
  }
}
</style>
