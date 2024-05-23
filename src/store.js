// store.js  
import { createStore } from 'vuex';  
  
export default createStore({  
  state: {  
    count: 0,
    edit:1,
    lable_info:[
        {id:1,sku:'GC10289',name:'小标签',type:1,index:2,info:{
            sku:'GC10289',
            name:'商品名称',
            price:'100',
            stock:'100',
            weight:'100',
            volume:'100',
            desc:'商品描述',
        }},
        {id:6,sku:'GC10289',name:'小标签2',type:1,index:3,info:{
            sku:'GC10289',
            name:'商品名称2',
            price:'1003',
            stock:'1004',
            weight:'1005',
            volume:'1006',
            desc:'商品描述',
        }},
        {id:7,sku:'GC10289',name:'小标签3',type:1,index:4},
        {id:2,sku:'GC10289',name:'中标签',type:2,index:3},
        {id:3,sku:'GC10289',name:'大标签',type:3,index:4},
    ],
    show_id:0,
    show_list:[],
  },  

  mutations: {  
    change_show_id(state,id){
        state.show_id = id;
        state.show_list = state.lable_info.filter(item=>item.id==state.show_id);
        console.log(state.show_list);
    }
  },  
  actions: {  
    // increment({ commit }) {  
    //   commit('increment');  
    // }  
  },  

  getters: {  
    // getCount: state => state.count  
  }  
});