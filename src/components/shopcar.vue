<template>
  <div class="wrap">
    <header>
      <i class="iconfont icon-xiangzuo"></i>
      <span>我的购物车</span>
      <i class="iconfont icon-taobao2"></i>
    </header>
    <section>
      <h1>
       <input type="checkbox" id="flag" v-model="flag" v-on:change="checkAll">
      <label for="flag">
        <span v-html="checkall"></span>
      </label>
      </h1>
    <shopcarList :lists="lists" @checkOn="checkmore"></shopcarList>
    <div class="allmore">   
        <span>总数量：{{total}}</span>
        <span>总价:{{allPrice}}</span>
    </div>
    </section>
    <footer>
      <ul>
        <li>
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </li>
            <li>
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </li>
            <li>
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </li>
            <li>
          <i class="iconfont icon-eyeopen"></i>
          <span>足迹</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
    import axios from "axios";
    import shopcarList from "./shopcarList.vue";
    export default {
        name: '',
        data() {
            return {
                lists: [],
                flag: false,
                checkall: "全选",
                total: 0,
                allPrice: 0
            }
        },
        components: {
            shopcarList
        },
        watch: {
            flag(val) {
                if (val) {
                    this.checkall = "反选"
                } else {
                    this.checkall = "全选"
                }
            }
        },
        methods: {
            _getJson() {
                axios.get("http://localhost:8080/api").then(res => {
                    console.log(res.data);
                    this.lists = res.data;
                    this._computed();
                }, err => {
                    console.log("未找到");
                });

            },
            //点击单个
            checkmore() {
                //点击单个变全选，定义一个空数组，点击一个添加一个，最后判断新数组是否和我的总长相等。
                let arr = [];
                this.lists.map(item => {
                    if (item.checked) {
                        arr.push(item);
                    }
                });
                if (arr.length == this.lists.length) {
                    this.flag = true;
                } else {
                    this.flag = false;
                };
                this._computed();
            },
            //点击全选反选
            checkAll() {
                if (this.flag) {
                    this.lists.map(item => {
                        item.checked = true;
                    })
                } else {
                    this.lists.map(item => {
                        item.checked = false;
                    })
                };
                this._computed();
            },
            _computed() {
                let tot = 0;
                let cout = 0;
                this.lists.map(item => {
                    if (item.checked) {
                        tot += item.price * item.cont;
                        cout += item.cont;
                    }
                });
                this.total = cout;
                this.allPrice = tot;
            }

        },
        mounted() {
            this._getJson();
        }
    }
</script>

<style>
    @import url("../../static/css/fonts/iconfont.css");
    @import url("../../static/css/style.css");
</style>