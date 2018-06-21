<template>
    <div>
          <ul>
        <li v-for="(item,index) in lists">
          <input type="checkbox" v-model="item.checked" @change="checkOne">
          <dl>
            <dt>
              <img :src="item.img">
            </dt>
            <dd>
              <h1>{{item.name}}</h1>
              <p>{{item.city}} 
                <span>价格：{{item.price}}</span>
              </p>
              <h3>
                <button @click="small(index)">-</button>
                <span v-html="item.cont"></span>
                <button type="button" @click="big(index)">+</button>
              </h3>

            </dd>
          </dl>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        name: "",
        props: ["lists"],
        methods: {
            //点击每个复选框
            checkOne() {
                this.$emit("checkOn")
            },
            //点击加号
            big($index) {
                this.lists[$index].cont++;
                this.$emit("checkOn");
            },
            //点击减号
            small($index) {
                if (this.lists[$index].cont < 1) return;
                this.lists[$index].cont--;
                this.$emit("checkOn");
            }
        }
    }
</script>
<style>
    @import url("../../static/css/style.css");
</style>