<template>
  <div>
    <v-card flat tile class="h-center" style="text-align:center; padding: 10%;">
      <div style="font-size: 170%; margin-bottom: 5%">{{name}}</div>
      <div v-if="menu == 'manage'">Price: {{price}} Size: {{size}}</div>
      <div style="margin-top: 6%">
        <div v-if="menu == 'manage'">
          <v-btn v-if="status == 'lock'" @click="unlock" color="success">Unlock</v-btn>
          <v-btn @click="open = !open" color="success">Open</v-btn>
          <v-btn @click="showEdit" color="warning">Edit</v-btn>
          <v-btn @click="showDelete = !showDelete" color="error">Remove</v-btn>
        </div>
        <div v-if="menu == 'addnew'">
          <v-btn @click="showAdd" color="success">Add</v-btn>
        </div>
      </div>
    </v-card>

    <!-- edit box -->
    <v-dialog v-model="edit" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Edit Box</v-card-title>

        <div style="width: 80%; text-align: center; margin: 3% 0% 0% 10%">
          <h1>{{name}}</h1>
          <v-text-field label="Price" placeholder="Price" v-model="price"></v-text-field>
          <v-text-field label="Size" placeholder="Size" v-model="size"></v-text-field>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" flat @click="editBox">Submit</v-btn>
          <v-btn color="error" flat @click="hideEdit">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- add box -->
    <v-dialog v-model="add" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add Box</v-card-title>
        <div style="width: 80%; text-align: center; margin: 3% 0% 0% 10%">
          <h1>{{name}}</h1>
          <v-text-field label="Price" placeholder="Price" v-model="price"></v-text-field>
          <v-text-field label="Size" placeholder="Size" v-model="size"></v-text-field>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" flat @click="addBox">Submit</v-btn>
          <v-btn color="error" flat @click="hideAdd">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- delete box -->
    <v-dialog v-model="showDelete" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Delete Box</v-card-title>

        <div style="width: 80%; text-align: center; margin: 3% 0% 0% 10%">
          <h1>{{name}}</h1>
          <v-btn color="success" flat @click="deleteBox">Delete</v-btn>
          <v-btn color="error" flat @click="showDelete = !showDelete">Cancel</v-btn>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- open box -->
    <v-dialog v-model="open" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Open Box</v-card-title>

        <div style="width: 80%; text-align: center; margin: 3% 0% 0% 10%">
          <h1>{{name}}</h1>
          <v-btn color="success" flat @click="openBox">Open</v-btn>
          <v-btn color="error" flat @click="open = !open">Cancel</v-btn>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import editBox from "./UIComponents/editBox";
import api from "../API/index";
import ble from "./ble/ble";

export default {
  name: "box",
  props: {
    name: String,
    status: String,
    id: String,
    price: Number,
    size: String
  },
  data() {
    return {
      edit: false,
      add: false,
      showDelete: false,
      open: false
    };
  },
  methods: {
    ...mapActions([
      "setMenu",
      "setStep",
      "setData",
      "setSelectedBox",
      "fetchBoxes"
    ]),
    showEdit: function() {
      this.edit = true;
    },
    hideEdit: function() {
      this.edit = false;
    },
    showAdd: function() {
      this.add = true;
    },
    hideAdd: function() {
      this.add = false;
    },
    addBox: async function() {
      try {
        let addbox = await api.addBox(
          this.id,
          this.name,
          this.size,
          this.price,
          1
        );
        this.hideAdd();
        this.fetchBoxes();
        console.log(addbox);
      } catch (error) {
        console.log(error);
      }
    },
    deleteBox: async function() {
      try {
        let deleteBox = await api.deleteBox(this.id);
        this.showDelete = false;
        this.fetchBoxes();
        console.log(deleteBox);
      } catch (error) {
        console.log(error);
      }
    },
    editBox: async function() {
      try {
        let editBox = await api.updateBox(this.id, this.size, this.price);
        this.hideEdit();
        this.fetchBoxes();
        console.log(editBox);
      } catch (error) {
        console.log(error);
      }
    },
    openBox: async function() {
      try {
        const peripheral = await ble.bleConnect(this.id);
        await ble.openBox(peripheral);
        this.open = false;
        setTimeout(async () => {
          await ble.closeBox(peripheral);
          await ble.bleDisconnect(this.id);
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    },
    unlock: async function() {
      try {
        const unlock = await api.unlockBox(this.id)
        this.fetchBoxes();
        console.log(unlock)
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(["menu"])
  },
  components: {
    editBox
  }
};
</script>
