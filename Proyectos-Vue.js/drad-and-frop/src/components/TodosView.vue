<script>
//IMPORTACIONES
import InputNew from "./InputNew.vue";

export default {
  //COMPONENTES
  components: {
    InputNew,
  },
  data() {
    //VARIABLES
    return {
      boards: [
        {
          id: this.randomUUID(),
          name: "Tablero 1",
          items: [
            {
              id: this.randomUUID(),
              title: "Feature de archivos",
            },
            {
              id: this.randomUUID(),
              title: "Resolver bug",
            },
          ],
        },
        {
          id: this.randomUUID(),
          name: "Tablero 2",
          items: [
            {
              id: this.randomUUID(),
              title: "mandar reporte",
            },
            {
              id: this.randomUUID(),
              title: "Code review",
            },
          ],
        },
      ],
      newItemTitle: "",
    };
  },
  //METODOS
  methods: {
    randomUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    addItem(board) {
      if (this.newItemTitle.trim() !== "") {
        board.items.push({
          id: this.randomUUID(),
          title: this.newItemTitle,
        });
        this.newItemTitle = "";
      }
    },

    handleNewItem(text, board) {
      board.items.push({
        id: crypto.randomUUID(),
        title: text,
      });
    },

    handleNewBoard() {
      const name = prompt("Name of the Board");
      if (name !== "") {
        this.boards.push({
          id: this.randomUUID(),
          name: name,
          items: [],
        });
      }
    },

    startDrag(evento, board, item) {
      evento.dataTransfer.setData(
        "text/plain",
        JSON.stringify({ boardId: board.id, itemId: item.id })
      );
    },

    onDrop(event, destino) {
      if (destino && destino.items) {
        // Verificar que 'destino' y 'destino.items' existen antes de iterar sobre ellos
        console.log(event, destino);

        const { boardId, itemId } = JSON.parse(
          event.dataTransfer.getData("text/plain")
        );

        const originBoard = this.boards.find((item) => item.id === boardId);

        if (originBoard.id === destino.id) {
          return;
        }
        const originItem = originBoard.items.find((item) => item.id === itemId);
        destino.items.push({ ...originItem });
        originBoard.items = originBoard.items.filter(
          (item) => item.id !== itemId
        );
        console.log(originBoard, originItem);
      }
    },

    removeDuplicates(array) {
      const seen = {};
      return array.filter(function (item) {
        return !(item.title in seen) && (seen[item.title] = true);
      });
    },
  },
};
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><a @click.prevent="handleNewBoard" href="">Create Board +</a></li>
      </ul>
    </nav>

    <div class="boards-container">
      <div class="boards">
        <div
          class="board"
          @drop="onDrop($event, board)"
          @dragover.prevent
          @dragenter.prevent
          v-for="board in boards"
          :key="board.id"
        >
          <div class="title">{{ board.name }} <span>edit</span></div>

          <InputNew
            @on-new-item="(text) => handleNewItem(text, board)"
          ></InputNew>
          <div class="items">
            <div
              class="item"
              draggable="true"
              @dragstart="startDrag($event, board, item)"
              v-for="item in board.items"
              :key="item.id"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  height: 40px;
  text-align: start;
  margin-bottom: 10px;
}

.boards {
  display: flex;
  flex-wrap: wrap; /* Permitir que los tableros se envuelvan si no hay suficiente espacio */
  gap: 10px;
  justify-content: center;
}

.board {
  flex: 1 1 calc(33.33% - 10px); /* Distribuir el espacio disponible equitativamente entre los tableros */
  max-width: calc(33.33% - 10px); /* Ancho máximo de cada tablero */
  margin-bottom: 20px; /* Espacio entre los tableros */
  max-width: 300px;
}

.title {
  font-size: 1.5rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.board {
  background: #efefef;
  padding: 20px;
  border-radius: 10px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  cursor: pointer;
}

.item {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
}

li {
  list-style-type: none;
}

a {
  font-size: 2rem;
  padding: 10px;
  color: rgb(51, 49, 49);
  background-color: rgba(124, 116, 116, 0.411);
  text-decoration: none;
  border-radius: 7px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-bottom: 30px;
}

a:hover {
  background-color: rgb(131, 144, 155);
  padding: 10px;
  border-radius: 7px;
}

form {
  width: 100%;
}

span {
  text-align: end;
  margin-left: 3rem;
  padding: 5px;
}

span:hover {
  background-color: rgba(76, 76, 80, 0.479);
  padding: 5px;
  border-radius: 7px;
}
</style>
